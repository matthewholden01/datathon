import time
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
CORS(app)


@app.route('/login_data', methods=['POST', 'GET'])
def loginData():
    data = request.get_json()
    print(data)
    return "hello"
