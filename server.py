from flask import Flask, request, jsonify
from flask_app.controllers import lost_and_found_routes

# CORS - this will allow the React app to connect to the API
    # Make sure you have this installed: pip install -U flask-cors
from flask_cors import CORS


app = Flask(__name__)

# CORS(app, support_credentials=True)
CORS (app)




if __name__=="__main__":
    app.run(debug=True)