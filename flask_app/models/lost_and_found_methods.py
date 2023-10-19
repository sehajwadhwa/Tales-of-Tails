from app import db

class Pets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    pet_picture = db.Column(db.String(300))
    date_of_birth = db.Column(db.Date, index=True)
    breed = db.Column(db.String(100))
    type_of_pet = db.Column(db.String(300))
    gender = db.Column(db.String(10))
    color = db.Column(db.String(50))
    weight = db.Column(db.String(300))
    vaccinations = db.Column(db.String(300))
    description = db.Column(db.Text)
    size = db.Column(db.String(300))
    size = db.Column(db.String(300))

class Shelter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    address = db.Column(db.String(300))
    city = db.Column(db.Date, index=True)
    zipcode = db.Column(db.String(100))
    email = db.Column(db.String(300))
    phone_number = db.Column(db.String(10))
    capacity_limit = db.Column(db.String(50))
   