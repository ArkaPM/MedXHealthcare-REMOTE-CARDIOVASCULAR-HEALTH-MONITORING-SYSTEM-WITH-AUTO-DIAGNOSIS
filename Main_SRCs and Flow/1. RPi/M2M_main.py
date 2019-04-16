import serial
from time import sleep
import os
import glob
import time
import urllib2
import webbrowser
import json

myAPI = 'W6WIRRCGLYOMTR06'
baseURL = 'https://api.thingspeak.com/update?api_key=%s'% myAPI

ser = serial.Serial('/dev/ttyAMA0',baudrate=9600)
print('Blood Pressure & Heart Rate Monitor...')
print('START')
ch = ser.read()
sleep(0.03)
remaining = ser.inWaiting()
ch += ser.read(remaining)
systole = int(ch[1:4])
diastole = int(ch[6:9])
bpm = int(ch[11:14])
print('Blood Pressure & Heart Rate Monitoring DONE')
print('Body Temperature Monitor...')
print('START')
os.system('modprobe w1-gpio')
os.system('modprobe w1-therm')

base_dir = '/sys/bus/w1/devices/'
device_folder = glob.glob(base_dir + '28*')[0]
device_file = device_folder + '/w1_slave'
 
def read_temp_raw():
    f = open(device_file, 'r')
    lines = f.readlines()
    f.close()
    return lines
 
def read_temp():
    lines = read_temp_raw()
    while lines[0].strip()[-3:] != 'YES':
        time.sleep(0.2)
        lines = read_temp_raw()
    equals_pos = lines[1].find('t=')
    if equals_pos != -1:
        temp_string = lines[1][equals_pos+2:]
        temp_c = float(temp_string) / 1000.0
        temp_f = temp_c * 9.0 / 5.0 + 32.0
        return temp_c, temp_f
sum_temp=0
avg_temp=0
i=0
while i<10:
    temperatures = read_temp()
    sum_temp += temperatures[1]
    i=i+1
    time.sleep(1)
avg_temp = sum_temp/10
print('Body Temperature monitoring DONE')
print('Generating Unique Token...')
webpage = urllib2.urlopen('https://api.thingspeak.com/channels/695679/feeds.json?api_key=QORAB2WCPBDLJL4S&results=1')
data = json.loads(webpage.read())
for f1 in data['feeds']:
    token = int(f1['field1'])
token = token + 1
print('Unique Token GENERATED')
print('------------------------------------------------')
print('Showing all sensor data')
print('Generated Authentication number is ' + str(token))
print('Systolic Pressure (mmHg): ' + str(systole))
print('Diastolic Pressure (mmHg): ' + str(diastole))
print('Heart Rate (bpm): ' + str(bpm))
print('Average Body Temperature (Celsius): '+ str(avg_temp))
print('Sending these data to ThingSpeak Server...')
conn = urllib2.urlopen(baseURL + '&field1=%s&field2=%s&field3=%s&field4=%s&field5=%s' % (str(token),str(systole),str(diastole),str(bpm),str(avg_temp)))
print conn.read()
conn.close()
print('DATA SENT')
print('------------------------------------------------')
webbrowser.open_new_tab('index.html')
print('HARDWARE DATA COLLECTED & SAVED)
