
import eel
import os
import sys
import pandas as pd



#select folder
eel.init('startbootstrap')


@eel.expose
def get_data(filename):
    file = str(os.path.dirname(os.path.realpath(sys.argv[0]))+"/data/"+filename)
    df = pd.read_csv(file)
    
    time = df['time'].tolist()
    x = df['x'].tolist()
    y = df['y'].tolist()
    z = df['z'].tolist()
 
    return time,x,y,z

eel.sel()(get_data)

eel.start('charts.html',size=(1200,800))