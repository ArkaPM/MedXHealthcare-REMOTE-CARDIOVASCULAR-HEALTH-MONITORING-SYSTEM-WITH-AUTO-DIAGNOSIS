import urllib.request
import random
import json
import os
from time import sleep




connected_nodes = ["http://192.168.43.117:3001", "http://192.168.43.117:3002", "http://192.168.43.117:3003", "http://192.168.43.117:3004", "http://192.168.43.117:3005"]

def mine():
    miner_node = random.choice(connected_nodes)
    url = miner_node + "/mine"

    mined = urllib.request.urlopen(url)
    data = json.load(mined)

    if mined.getcode() == 200:
        print ("Record has been successfully written to blockchain")
    else:
        print ("Cannot connect to blockchain network")
    


while True:
    mine()
    sleep(100)
    
