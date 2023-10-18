from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

@app.route('/add-pet-lost-and-found', mehtods=['POST'])
def add_pet_lost_and_found():
    #todo define adding a pet to the repo
    return "add_pet_lost_and_found"

@app.route('/add-pet-inventory', mehtods=['POST'])
def add_pet_inventory():
    #todo add pet inventory
    return "add_pet_inventory"

@app.route('/pet-lost-and-found', methods=['GET'])
def get_pet_lost_and_found():
    #todo get pet lost and found
    return "get_pet_lost_and_found"

@app.route('/pet-inventory', methods=['GET'])
def get_pet_inventory():
    #todo get pet inventory
    return "get_pet_inventory"

@app.route('/get-shelters/<int:zip>', methods=['GET'])
def get_shelters(zip):
    #todo get pet inventory
    return "get_pet_inventory " + zip