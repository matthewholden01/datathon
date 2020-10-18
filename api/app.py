import time
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import requests
import pandas as pd
import json

app = Flask(__name__)
CORS(app)

@app.route('/login_data', methods=['POST', 'GET'])
def loginData():
    if request.method == "POST":
        data = request.get_json()
        df = pd.DataFrame(data, index=[0])
        df.to_csv('data.csv')
        return "Done"
    return "success"

@app.route('/post_data')
def post_data():
    df = pd.read_csv('data.csv')
    my_dict = df.to_dict()
    return my_dict

