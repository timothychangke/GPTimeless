from flask import Flask, request
import datetime
from transformers import pipeline
import spacy
import requests

# Models 
med7 = spacy.load("en_core_med7_trf")
classifier = pipeline("text-classification",model='bhadresh-savani/distilbert-base-uncased-emotion')
 
# Initializing flask app
app = Flask(__name__)
 
# Route for sentiment analysis
@app.route('/sentiment', methods=["POST"])
def get_sentiment():
    text = request.json

    res = classifier(text, top_k=10)
    tmp = dict()
    for i in res:
        tmp[i['label']] = i['score']

    return tmp

# Route for medical term extractions
@app.route('/medical', methods=["POST"])
def get_medical():
    data_collected = {}
    text = request.json

    doc = med7(text)
    for ent in doc.ents:
        if len(ent.text) != 0:
            data_collected[ent.text] = ent.label_

    return data_collected 
     
# Running app
if __name__ == '__main__':
    app.run(port=8000, debug=True)