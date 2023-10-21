from flask_sqlalchemy import SQLAlchemy
from server import db

class Shelter(db.Model):
   id = db.Column(db.Integer, primary_key=True, autoincrement=True)
   name = db.Column(db.String(100))
   passage_id = db.Column(db.String(24), index=True)
   pets_in_shelter = db.relationship('Pets', backref='shelter')

class Pets(db.Model):
   id = db.Column(db.Integer, primary_key=True, autoincrement=True)
   name = db.Column(db.String(100))
   pet_picture = db.Column(db.String(100))
   date_of_birth = db.Column(db.date())
   breed = db.Column(db.String(100))
   type_of_pet = db.Column(db.String(100))
   gender = db.Column(db.String(24), index=True)  
   color = db.Column(db.String(24), index=True)  
   size = db.Column(db.Integer(5))   
   weight = db.Column(db.Integer(5))  
   description = db.Column(db.String(24), index=True)
   shelter_id = db.Column(db.Integer, db.ForeignKey('shelter.id'))
