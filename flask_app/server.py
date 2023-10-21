from flask import Flask, request, jsonify
from controllers import lost_and_found_routes
from models import Pets, Shelter
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#CORS - this will allow the React app to connect to the API
#TO-DO: to finish flask_cors set up
CORS(app, support_credentials=True)


db = SQLAlchemy(app)   
def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///shelters.sqlite3'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    with app.app_context():
        db.create_all()
    
    # blueprint for auth routes in our app
    from .main import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    # blueprint for non-auth parts of app
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app

@main.route('/register')
def register():
    return render_template('register.html', psg_app_id=PASSAGE_APP_ID, api_url=API_URL)

@auth.route('/shelter', methods=['POST'])
def createUser():
    # g.user will be set to the Passage user id
    s = Shelter()
    s.passage_id = g.user
    s.name = request.get_json()["name"]

    # commit to database
    db.session.add(s)
    db.session.commit()

    return jsonify({"result": 200})

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


