
from . import db
from datetime import datetime

class Notificacao(db.Model):
    __tablename__ = 'notificacao'
    id_notificacao = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuario.id_usuario'), nullable=False)
    titulo = db.Column(db.String(150))
    mensagem = db.Column(db.Text)
    tipo = db.Column(db.Enum('Quiz', 'TPC', 'Desempenho'), default='Quiz')
    data_envio = db.Column(db.DateTime, default=datetime.utcnow)
    lido = db.Column(db.Boolean, default=False)
