from flask import Flask, render_template, request, redirect, session, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/add-pet-lost-and-found', methods=['POST'])
def add_pet_lost_and_found():
    #todo define adding a pet to the repo
    return "add_pet_lost_and_found"

@app.route('/add-pet-inventory', methods=['POST'])
def add_pet_inventory():
    #todo add pet inventory
    return "add_pet_inventory"

@app.route('/pet-inventory', methods=['GET'])
def get_pet_inventory():
    #todo get pet inventory
    return "get_pet_inventory"

@app.route('/get-shelters/<int:zip>', methods=['GET'])
def get_shelters(zip):
    #todo get pet inventory
    return "get_pet_inventory " + zip