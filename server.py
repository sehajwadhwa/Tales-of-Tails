from flask import Flask, request, jsonify
from flask_app.controllers import lost_and_found_routes

app = Flask(__name__)

#CORS - this will allow the React app to connect to the API
#TO-DO: to finish flask_cors set up
from flask_cors import CORS
CORS(app, support_credentials=True)

@app.route("/")
def tales_of_tails():
    return "<h1> This is our Tales of Tails page</h1>"



if __name__=="__main__":
    app.run(debug=True)