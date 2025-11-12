
from flask import Blueprint, request, jsonify
from models.usuario import Usuario
from models import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json() or {}
    nome = data.get('nome')
    email = data.get('email')
    senha = data.get('senha')

    if not nome or not email or not senha:
        return jsonify({'erro': 'Dados incompletos'}), 400

    if Usuario.query.filter_by(email=email).first():
        return jsonify({'erro': 'Usuário já existe'}), 400

    novo_usuario = Usuario(nome=nome, email=email, senha_hash=generate_password_hash(senha))
    db.session.add(novo_usuario)
    db.session.commit()
    return jsonify({'mensagem': 'Usuário registado com sucesso'}), 201


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    email = data.get('email')
    senha = data.get('senha')

    if not email or not senha:
        return jsonify({'erro': 'Dados incompletos'}), 400

    usuario = Usuario.query.filter_by(email=email).first()
    if not usuario or not check_password_hash(usuario.senha_hash, senha):
        return jsonify({'erro': 'Credenciais inválidas'}), 401

    token = create_access_token(identity={'id': usuario.id_usuario, 'email': usuario.email})
    return jsonify({'token': token})
