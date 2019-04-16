import json
import csv
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db


cred = credentials.Certificate('./finalmedx-firebase-adminsdk-vtas4-1a29130f51.json')

firebase_admin.initialize_app(cred, {
    'databaseURL' : 'https://finalmedx.firebaseio.com'
})




ref = db.reference('/')
#s = ref.get().keys()[-1]
els = list(ref.get().items())
print(type (els))
print (els[-1])

data = els[-1]

K = data[1].keys()
##for i in data[1].keys():
##    K.append(i)

V = data[1].values()
##for i in data[1].values():
##    V.append(i)


employ_data = open('./Virtual_Nurse_Data.csv', 'w')

csvwriter = csv.writer(employ_data)

csvwriter.writerow(K)

csvwriter.writerow(V)

employ_data.close()











##s=json.dumps(data)
#data2=json.loads(s)

##print (type(s))
##
##print (s)
##employee_parsed = json.loads(s)
##
##print (employee_parsed)
##emp_data = employee_parsed[-1]
##print (emp_data)
# open a file for writing

# create the csv writer object

##csvwriter = csv.writer(employ_data, delimiter=',')
##count = 0
##list1 = emp_data.values()
##print(list1)
##print (emp_data)
##columns = "Body Temperature (Farenheit), Diastolic Pressure (mmHg), Heart Rate (bpm), Systolic Pressure (mmHg), Token ID\n"
##
##employ_data.write(columns)
##rows = ""
##for emp in emp_data:
##    rows.append(emp_data[emp]+', ')
"""
for emp in emp_data:
      #print (type(emp))
      print (emp + "shivam")
      print (emp_data[emp])
      if count == 0:

             header = emp

             csvwriter.writerow(header)

             count += 1

      csvwriter.writerow(emp_data[emp])
"""
##employ_data.close()

