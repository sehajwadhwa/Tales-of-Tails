from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
db = SQLAlchemy()

class Shelters(db.Model):
   __tablename__ = 'shelters'
   id = db.Column(db.Integer, primary_key=True, autoincrement=True)
   name = db.Column(db.String(100))
   passage_id = db.Column(db.String(24), index=True)
   pets_in_shelter = db.relationship('Pets', backref='shelter', lazy=True)

class Pets(db.Model):
   __tablename__= 'pets'
   id = db.Column(db.Integer, primary_key=True, autoincrement=True)
   name = db.Column(db.String(100))
   pet_picture = db.Column(db.String(100))
   date_of_birth = db.Column(db.String(10))
   breed = db.Column(db.String(100))
   type_of_pet = db.Column(db.String(100), nullable =False, default = 'petimage.jpg')
   gender = db.Column(db.String(24), index=True)  
   color = db.Column(db.String(24), index=True)  
   size = db.Column(db.Integer())   
   weight = db.Column(db.Integer())  
   description = db.Column(db.String(24), index=True)
   shelter_id = db.Column(db.Integer, db.ForeignKey('shelters.id'), nullable=False)
   date_created = db.Column (db.DateTime, nullable = False, default= datetime.utcnow)

