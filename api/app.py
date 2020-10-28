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

@app.route('/participant_data')
def participantData():
    applicant_df = pd.read_csv('applicants.csv')
    df_dict = applicant_df.to_dict()
    data = {
       'age':
           {
            '(15, 18]': 0,
            '(18, 20]': 0,
            '(20, 22]': 0,
            '(22, 25]': 0,
            '(25, 30]': 0,
            '(30, 50]': 0
            },
       'class':
           {
            'Fr': 0,
            'So': 0,
            'Jr': 0,
            'Sr': 0,
            'Ma': 0,
            'PhD': 0,
            'O': 0
            },
       'experience':
           {
               0: 0,
               1: 0,
               2: 0,
               3: 0,
               4: 0
            },
        'gen':
            {
                'True': 0,
                'False': 0

            },
        'major': {},
        'hacks':
            {
                '0': 0,
                '1-3': 0,
                '4-7': 0,
                '8-10': 0,
                '10+': 0
            },
        'industries': {},
        'school': {},
        'tech_exp': {}
    }
    for age in df_dict['age_bin'].values():
        data['age'][age] += 1
    for cls in df_dict['classification'].values():
        data['class'][cls] += 1
    for exp in df_dict['datascience_experience'].values():
        data['experience'][exp] += 1
    for gen in df_dict['first_generation'].values():
        data['gen'][f'{gen}'] += 1
    for major in df_dict['majors'].values():
        arr = major.split(',')
        for maj in arr:
            try:
                data['major'][maj[maj.find('\'') + 1:maj.rfind('\'')]] += 1
            except KeyError:
                data['major'][maj[maj.find('\'') + 1:maj.rfind('\'')]] = 1
    for hacks in df_dict['num_hackathons_attended'].values():
        data['hacks'][hacks] += 1
    for val in df_dict['relavent_industries'].values():
        arr = val.split(',')
        for ind in arr:
            if len(arr) > 3:
                try:
                    data['industries'][ind[ind.find('\'') + 1: ind.rfind('\'')]] += 1
                except KeyError:
                    data['industries'][ind[ind.find('\'') + 1: ind.rfind('\'')]] = 1
    for school in df_dict['school'].values():
        try:
            data['school'][school] += 1
        except KeyError:
            data['school'][school] = 1
    for val in df_dict['technology_experience'].values():
        arr = val.split(',')
        for tech in arr:
            if len(arr) > 3:
                try:
                    data['tech_exp'][tech[tech.find('\'') + 1: tech.rfind('\'')]] += 1
                except KeyError:
                    data['tech_exp'][tech[tech.find('\'') + 1: tech.rfind('\'')]] = 1

    return data

@app.route('/post_data')
def post_data():
    df = pd.read_csv('data.csv')
    my_dict = df.to_dict()
    return my_dict



