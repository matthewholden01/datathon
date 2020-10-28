# To add a new cell, type '# %%'
# To add a new markdown cell, type '# %% [markdown]'
base / null.j2[markdown]
# # TD For-You Page
#
# TD wants the hackathon experience to be top-notch for everyone. To assist in this, we want to provide a **For-You** page to our future applicants on our website tamudatathon.com. Can you use the TAMU Datathon data to make this happen?
#
# **Ideas:**
# - Visualization of Achievements
# - Supervised Learning for Recommending Workshops
# - Clustering for Team Building
# - Natural Language Processing for Workshops Search Engine
#
# **Datasets:**
#
# We provide four datasets for this challenge. You are free to find your own as well.
# 1. TD 2020 Applicant Data
# 2. Bootcamps
# 3. Workshop Queries
# 4. Workshops
#
#
# The details for these datasets are here: www.datalogz.io.
# 1. Make an account, and for company, enter 'TAMU Datathon'
# 2. On the homepage, click 'Enter a Code' and enter SZMX5CNOZU
# 3. You should have access to the relevant tables on the left hand bar
# 4. Choose the desired table. Click "Definitions" to see column definitions
#

# %%
import pandas as pd

apps = pd.read_csv('applicants.csv').set_index('userid')  # read 'TD 2020 Applicant' data

# %%
apps.head(2)

# %%
apps

# %%
bootcamp = pd.read_csv('bootcamp_turnout.csv').set_index('userid')  # read 'Bootcamp' data

# %%
bootcamp.head(2)

# %%
joined = bootcamp.join(apps)
joined.columns

# %%
joined

base / null.j2[markdown]
# # Visualization for Sponsorships?
# Awesome sponsors make an awesome TD. Sponsors want to know why they should sponsor datathon. Can you answer this for them using data viz and EDA?

# %%
import matplotlib.pyplot as plt

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 4))
apps.relavent_industries.apply(eval).explode().value_counts().plot.pie(ax=ax1)
ax1.set_title('Applicant Interest in Industries')
apps.majors.apply(eval).explode().value_counts()[:10].plot.pie(ax=ax2)
ax2.set_title('Top 10 Majors')

# %%
print(f'Predicting {joined.workshop.nunique()} workshops')
joined.workshop.value_counts(normalize=True).round(2)

# %%
import seaborn as sns
import matplotlib.pyplot as plt

sns.set_theme(style="ticks", color_codes=True)

# %%


# %%
# Looks at the distribution of the Data
sns.catplot(x="datascience_experience", y="classification", kind="swarm", data=joined)

# %%
# Different types of Tech Experience |
for i in joined.technology_experience.unique():
    print(i)

# %%
# Let us take a look at the Data
joined

# %%


# %%
# joined["First"]= new[0]

# # making separate last name column from new data frame
# joined["Last"]= new[1]
# joined['technology_experience'].split(',')


# %%
kw = ['Python']
joined['Python'] = joined['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['R']
joined['R'] = joined['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['SQL']
joined['SQL'] = joined['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['Excel']
joined['Excel'] = joined['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['NumPy']
joined['NumPy'] = joined['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['Tableau']
joined['Tableau'] = joined['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['TensorFlow']
joined['TensorFlow'] = joined['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['Pandas']
joined['Pandas'] = joined['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['Scikit-learn']
joined['Scikit-learn'] = joined['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['cloud']
joined['cloud'] = joined['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['Keras']
joined['Keras'] = joined['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['MATLAB']
joined['MATLAB'] = joined['technology_experience'].apply(lambda x: any([k in x for k in kw]))

# %%
kw = ['Python']
apps['Python'] = apps['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['R']
apps['R'] = apps['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['SQL']
apps['SQL'] = apps['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['Excel']
apps['Excel'] = apps['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['NumPy']
apps['NumPy'] = apps['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['Tableau']
apps['Tableau'] = apps['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['TensorFlow']
apps['TensorFlow'] = apps['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['Pandas']
apps['Pandas'] = apps['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['Scikit-learn']
apps['Scikit-learn'] = apps['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['cloud']
apps['cloud'] = apps['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['Keras']
apps['Keras'] = apps['technology_experience'].apply(lambda x: any([k in x for k in kw]))
kw = ['MATLAB']
apps['MATLAB'] = apps['technology_experience'].apply(lambda x: any([k in x for k in kw]))

# %%
# kw = ['Excel', 'Python', 'Tableau', 'TensorFlow', 'Pytorch', 'R', 'SQL', 'Keras', 'Pandas', 'NumPy', 'Scikit-learn', 'cloud']
# for i in kw:
#     joined[i] = joined['technology_experience'].apply(lambda x: any([k in x for k in i]))


# %%
joined

# %%
apps

# %%
pd.DataFrame(joined.technology_experience.values.tolist()).add_prefix('code_')

# %%
# from kmodes.kmodes import KModes
# km = KModes(n_clusters=4, init='Huang', n_init=100, verbose=1)

# #data = joined#.fillna('')
# data = joined.dropna(axis=1, how='any')

# clusters = km.fit_predict(data)

# # Print the cluster centroids
# print(km.cluster_centroids_)


# %%
from kmodes.kmodes import KModes

km = KModes(n_clusters=4, init='Huang', n_init=100, verbose=1)

# data = joined#.fillna('')
data = joined.dropna(axis=1, how='any')
data = data.drop(columns=['technology_experience', 'minors'])

clusters = km.fit_predict(data)

# Print the cluster centroids
print(km.cluster_centroids_)

# %%
data.columns

# %%
#### CLUSTERS
right = pd.DataFrame(km.cluster_centroids_)
# right = right.astype(data.dtypes.to_dict())
right = pd.DataFrame(data=right.values, columns=data.columns)

# %%
right

# %%
apps

# %%
apps.isin(km.cluster_centroids_[0]).any().any()

# %%
# apps.loc[apps.isin([km.cluster_centroids_[3]]).any(axis=1)].index.tolist()
joined

# %%
# right = pd.DataFrame(data=right.values, columns=data.columns)
# right[['two', 'three']] = df[['two', 'three']].astype(float)


# %%
# pd.merge(data,right, on = data.columns)
data

# %%
data.reset_index(inplace=True)
clusters_users = pd.merge(left=data['userid'], right=right, right_index=True, left_index=True)

# %%
data.join(right)

# %%
clusters_users

# %%
apps

# %%
data

# %%
km.cluster_centroids_

# %%


pd.concat([right, data], axis=1)

# %%
# data.info()


# %%
# right = right.astype(data.dtypes.to_dict())


# %%
# right.info()


# %%


# %%
# new_df_with_col_names = pd.DataFrame(data=no_col_names_df.values, columns=col_names_df.columns


# %%
data

# %%
apps

# %%
apps.insert(loc=0, column='workshop', value='')

# %%
apps = apps.dropna(axis=1, how='any')
apps = apps.drop(columns=['technology_experience', 'minors'])
# apps.insert(loc=0, column='workshop', value='')

km.predict(apps)

# %%


# %%
clusters_users

# %%
clusters_users.iloc[0][0]

# %%
data

# %%
joined['age_bin'].unique()

# %%
keeps = ['PhD']

# %%
joined['classification'] = joined['classification'].where(joined.isin(['PhD'])).fillna('')

# %%


# %%
ax = sns.countplot(x="datascience_experience", hue="classification", data=apps)

# %%


# %%
ax = sns.countplot(x="classification", hue="workshop", data=joined)
plt.legend(bbox_to_anchor=(1.05, 1), loc='upper left', fontsize='xx-small')

# %%
ax = sns.countplot(x="school", data=joined,
                   facecolor=(0, 0, 0, 0),
                   linewidth=5,
                   edgecolor=sns.color_palette("dark", 3))
ax.tick_params(axis="x", labelsize=3)

base / null.j2[markdown]
# # Supervised Learning for Recommending Workshops?
# - Netflix recommends movies, Amazon recommends products, why can't TD recommend workshops to participants?

# %%
target_name = 'workshop'
feature_names = ['datascience_experience', 'age_bin', 'classification', 'num_hackathons_attended']
target = joined[target_name]
features = joined[feature_names]

# %%
target

# %%
target

# %%
# target.loc[userid == clusters_users.iloc[0][0]]


# %%
target[clusters_users.iloc[1][0]]

# %%
clusters_users.iloc[0][0]

# %%
clusters_users

# %%
from sklearn.dummy import DummyClassifier

clf = DummyClassifier(strategy='most_frequent')

# %%
from sklearn.model_selection import cross_val_score

cross_val_score(clf, features, target).mean().round(2)

# %%
# @title MAP@K
# @markdown MAP@K is a metric you should report for your recommendation engine!

import numpy as np


def apk(actual, predicted, k):
    """
    Computes the average precision at k.
    This function computes the average prescision at k between two lists of
    items.
    Parameters
    ----------
    actual : list
             A list of elements that are to be predicted (order doesn't matter)
    predicted : list
                A list of predicted elements (order does matter)
    k : int, optional
        The maximum number of predicted elements
    Returns
    -------
    score : double
            The average precision at k over the input lists
    """
    if len(predicted) > k:
        predicted = predicted[:k]

    score = 0.0
    num_hits = 0.0

    for i, p in enumerate(predicted):
        if p in actual and p not in predicted[:i]:
            num_hits += 1.0
            score += num_hits / (i + 1.0)

    if not actual:
        return 0.0

    return score / min(len(actual), k)


def mapk(actual, predicted, k=1):
    """
    Computes the mean average precision at k.
    This function computes the mean average prescision at k between two lists
    of lists of items.
    Parameters
    ----------
    actual : list
             A list of lists of elements that are to be predicted
             (order doesn't matter in the lists)
    predicted : list
                A list of lists of predicted elements
                (order matters in the lists)
    k : int, optional
        The maximum number of predicted elements
    Returns
    -------
    score : double
            The mean average precision at k over the input lists
    """
    return np.mean([apk(a, p, k) for a, p in zip(actual, predicted)])


# %%
# get the pairings of (user, list of ws attended)
actual = bootcamp.groupby('userid').workshop.apply(list)
# get the corresponding users from the applications df
reindexed = apps.loc[actual.index]

# %%
actual


# %%
def get_ordered_predictions(clf, features):
    probs = clf.predict_proba(features)
    predicted_idx = np.argsort(probs, axis=1)[:, ::-1]
    return clf.classes_[predicted_idx]


clf.fit(features, target)
preds = get_ordered_predictions(clf, reindexed[feature_names])

# %%
mapk(actual, preds, k=1)

# %%
from sklearn.datasets import load_iris
from sklearn import tree

X, y = load_iris(return_X_y=True)
clf = tree.DecisionTreeClassifier()
clf = clf.fit(X, y)

base / null.j2[markdown]
# # Clustering for Team Building?
# - Due to COVID, finding people to team with amoungst the 1200 other particants can be daunting. Could you recommend teamates considering such things as time zone? Think Facebook/Linkedin friend recommender...

# %%


base / null.j2[markdown]
# # Natural Language Processing for Finding Workshops?
#
# - Finding the right workshop to attend can be tricky and time is valuable during a datathon. Build a search engine for TD workshops that allows particpants to use natural langauge queries to find workshops, e.g. "how to import a dataset" -> Data Wrangling
# - Idea: What if you trained word embeddings on towards data science [articles](https://www.kaggle.com/dorianlazar/medium-articles-dataset)?

# %%
queries = pd.read_csv('https://drive.google.com/uc?id=1ff4xFh4fl0-SvpYNeYQoNvDbzdiZfn-t')
workshops = pd.read_csv('https://drive.google.com/uc?id=10MngpIZoAGgwAk_sxoORj7WPYs74nz5Y')

# %%
queries.head(2)

# %%
workshops.head(2)

# %%
workshops.tags = workshops.tags.apply(lambda xs: xs.split(', '))

# %%
# load the Stanford GloVe model
import requests

url = 'https://td2020-static.s3.amazonaws.com/glove.6B.50d.txt'
r = requests.get(url)
open('glove.6B.50d.txt', 'wb').write(r.content)

# %%
# from gensim.scripts.glove2word2vec import glove2word2vec
# glove_input_file = 'glove.6B.50d.txt'
# word2vec_output_file = 'glove.6B.50d.txt.word2vec'
# glove2word2vec(glove_input_file, word2vec_output_file)


# %%
# from gensim.models import KeyedVectors
# model = KeyedVectors.load_word2vec_format(word2vec_output_file, binary=False)


# %%
# def distance(query, tag_set):
#   if len(tag_set) == 0:
#     return np.inf
#   lquery = query.lower().split()
#   prospect = ' '.join(tag_set).lower().split()
#   return model.wmdistance(lquery, prospect)

# def get_best_match_workshop(query):
#   return np.argmin([distance(query, ws) for ws in workshops.tags.values])

# print('{0:<70}{1:<40}{2:<40}'.format('Query', 'Predicted Workshop', 'Actual Workshop'))
# for i in range(20):
#   query = queries.iloc[i].query
#   predict_idx = get_best_match_workshop(query)
#   predicted = workshops.iloc[predict_idx].workshop
#   actual = queries.iloc[i].workshop
#   print('{0:<70}{1:<40}{2:<40}'.format(query, predicted, actual))


# %%


base / null.j2[markdown]
#

# %%
df1 = pd.DataFrame({
    'workshop': '',
    'school': "Texas A&M University",
    'majors': 'Computer Science & Engineering',
    'age_bin': '(18-20]',
    'classification': 'PhD',
    'first_generation': False,
    'datascience_experience': int(2),
    'num_hackathons_attended': '1-3',
    'relavent_industries': 'technology',
    'Python': True, 'R': True, 'SQL': False, 'Excel': False, 'NumPy': True,
    'Tableau': False, 'TensorFlow': False, 'Pandas': True, 'Scikit-learn': True, 'cloud': True, 'Keras': False,
    'MATLAB': False}, index=[0])

# %%
df1

# %%
km.predict(df1)

# %%
clusters_users.iloc[0][0]

# %%
clusters_users

# %%
target[clusters_users.iloc[0][0]]

