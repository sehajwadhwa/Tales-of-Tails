from flask import Flask, request, jsonify
from flask_app.controllers import lost_and_found_routes

app = Flask(__name__)

#CORS - this will allow the React app to connect to the API
#TO-DO: to finish flask_cors set up
from flask_cors import CORS
CORS(app, support_credentials=True)


@app.route('/pet-lost-and-found', methods=['GET'])
def get_pet_lost_and_found():
    #todo get pet lost and found
    return jsonify({'pets':"get_pet_lost_and_found"})

@app.route('/add-pet-lost-and-found', methods=['POST'])
def add_pet_lost_and_found():
    #todo define adding a pet to the repo
    return jsonify({'pet':"add_pet_lost_and_found"})

@app.route('/add-pet-inventory', methods=['POST'])
def add_pet_inventory():
    #todo add pet inventory
    return jsonify({'pet':"add_pet_inventory"})

@app.route('/pet-inventory', methods=['GET'])
def get_pet_inventory():
    #todo get pet inventory
    return jsonify({'pet':"get_pet_inventory"})

@app.route('/get-shelters/<int:zip>', methods=['GET'])
def get_shelters(zip):
    #todo get pet inventory
    return jsonify({'pet':"get_pet_inventory", 'zip': zip})

if __name__=="__main__":
    app.run(debug=True,
    host='127.0.0.1',
    port='5000')


