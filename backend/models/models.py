from extensions import db
from datetime import datetime

class Role(db.Model):
    __tablename__ = 'Role'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(50), unique=True, nullable=False)

class Utilizador(db.Model):
    __tablename__ = 'Utilizador'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    role_id = db.Column(db.Integer, db.ForeignKey('Role.id'))

    role = db.relationship('Role', backref=db.backref('utilizadores', lazy=True))