from flask import Flask, request, jsonify
from dotenv import load_dotenv
# from controllers import lost_and_found_routes
from models import Shelters, Pets
from models import db
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from passageidentity import Passage
import os

load_dotenv()

PASSAGE_APP_ID = os.environ.get("PASSAGE_APP_ID")
PASSAGE_API_KEY = os.environ.get("PASSAGE_API_KEY")
psg = Passage(PASSAGE_APP_ID, PASSAGE_API_KEY)

def create_app():
    app = Flask(__name__)
    #CORS - this will allow the React app to connect to the API
    #TO-DO: to finish flask_cors set up
    CORS(app, support_credentials=True)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///shelters.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    with app.app_context():
        db.create_all()
    


    @app.route('/create-shelter', methods=['POST'])
    def createShelter():
        # g.user will be set to the Passage user id
        passage_user = psg.authenticateRequest(g.user)
        
        new_shelter = Shelters(
            name=passage_user.name, passage_id = passage_user.id)

        # commit to database
        db.session.add(new_shelter)
        db.session.commit()

        return jsonify({"result": 200})

    @app.route('/create-pet', methods=['POST'])
    def createPet():
        # g.user will be set to the Passage user id
        data = request.get_json
        shelter_id = data.get('shelter_id')
        
        shelter = Shelters.query.get(shelter_id)
        if shelter is None:
            return jsonify({"message": "Shelter not found"}), 404

        
        new_pet = Pets(
            name = data['name'],
            pet_picture = data['pet_image'],
            date_of_birth = data[''],
            breed = data['breed'],
            type_of_pet = data['type_of_pet'],
            gender = data['gender'],
            color = data['color'],
            size =  data['size'],
            weight = data['weight'],
            description = data['description'],
            shelter_id = shelter.id
            )

        # commit to database
        db.session.add(new_pet)
        db.session.commit()

        return jsonify({"message": "Pet added successfully"}), 201

    @app.route('/shelters', methods=['GET'])
    def get_shelters():
        # g.user will be set to the Passage user id
        shelters = Shelters.query.all()
        shelters_list = [{
            "id": shelter.id, "name": shelter.name
        } for shelter in shelters]
        
        return jsonify(shelters_list)

    @app.route('/pets', methods=['GET'])
    def get_pet_lost_and_found():
        #todo get pet lost and found
        pets = Pets.query.all()
        pets_list = [{
            "id": pet.id, "name": pet.name
        } for pet in pets]
        return jsonify({pets_list})

    @app.route('/add-pet-lost-and-found', methods=['POST'])
    def add_pet_lost_and_found():
        #todo define adding a pet to the repo
        return jsonify({'pet':"add_pet_lost_and_found"})

    @app.route('/add-pet-inventory', methods=['POST'])
    def add_pet_inventory():
        #todo add pet inventory
        return jsonify({'pet':"add_pet_inventory"})

    @app.route('/shelters/<int:shelter_id>/pets', methods=['GET'])
    def get_pets_for_shelter(shelter_id):
        shelter = Shelters.query.get(shelter_id)
        if shelter is None:
            return jsonify({"message": "Shelter not found"}), 404

        pets = Pets.query.filter_by(shelter_id=shelter_id).all()

        pet_list = [{"id": pet.id, "name": pet.name} for pet in pets]
        return jsonify({"pets": pet_list})
    
    # @app.route('/get-pets/<int:zip>', methods=['GET'])
    # def get_shelters(zip):
    #     #todo get pet inventory
    #     return jsonify({'pet':"get_pet_inventory", 'zip': zip})


    return app
    
if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, host='127.0.0.1', port=5000)