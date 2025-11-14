
from . import db

class Papel(db.Model):
    __tablename__ = 'papel'
    id_papel = db.Column(db.Integer, primary_key=True)
    nome_papel = db.Column(db.String(50), unique=True, nullable=False)
    descricao = db.Column(db.String(150))

    usuarios = db.relationship('UsuarioPapel', back_populates='papel', cascade='all, delete-orphan')
    permissoes = db.relationship('PapelPermissao', back_populates='papel', cascade='all, delete-orphan')


class Permissao(db.Model):
    __tablename__ = 'permissao'
    id_permissao = db.Column(db.Integer, primary_key=True)
    nome_permissao = db.Column(db.String(100), unique=True, nullable=False)
    descricao = db.Column(db.Text)

    papeis = db.relationship('PapelPermissao', back_populates='permissao', cascade='all, delete-orphan')


class UsuarioPapel(db.Model):
    __tablename__ = 'usuario_papel'
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuario.id_usuario'), primary_key=True)
    id_papel = db.Column(db.Integer, db.ForeignKey('papel.id_papel'), primary_key=True)

    usuario = db.relationship('Usuario', back_populates='papeis')
    papel = db.relationship('Papel', back_populates='usuarios')


class PapelPermissao(db.Model):
    __tablename__ = 'papel_permissao'
    id_papel = db.Column(db.Integer, db.ForeignKey('papel.id_papel'), primary_key=True)
    id_permissao = db.Column(db.Integer, db.ForeignKey('permissao.id_permissao'), primary_key=True)

    papel = db.relationship('Papel', back_populates='permissoes')
    permissao = db.relationship('Permissao', back_populates='papeis')
