
from . import db
from datetime import datetime

class Quiz(db.Model):
    __tablename__ = 'quiz'
    id_quiz = db.Column(db.Integer, primary_key=True)
    id_disciplina = db.Column(db.Integer, db.ForeignKey('disciplina.id_disciplina'), nullable=False)
    titulo = db.Column(db.String(150), nullable=False)
    data_criacao = db.Column(db.DateTime, default=datetime.utcnow)
    data_limite = db.Column(db.DateTime)
    estado = db.Column(db.Enum('Ativo', 'Encerrado'), default='Ativo')


class Pergunta(db.Model):
    __tablename__ = 'pergunta'
    id_pergunta = db.Column(db.Integer, primary_key=True)
    id_quiz = db.Column(db.Integer, db.ForeignKey('quiz.id_quiz'), nullable=False)
    texto_pergunta = db.Column(db.Text, nullable=False)
    tipo = db.Column(db.Enum('Multipla Escolha', 'Verdadeiro/Falso'), default='Multipla Escolha')
    nivel_dificuldade = db.Column(db.Enum('Fácil', 'Médio', 'Difícil'), default='Médio')


class Opcao(db.Model):
    __tablename__ = 'opcao'
    id_opcao = db.Column(db.Integer, primary_key=True)
    id_pergunta = db.Column(db.Integer, db.ForeignKey('pergunta.id_pergunta'), nullable=False)
    texto_opcao = db.Column(db.Text, nullable=False)
    correta = db.Column(db.Boolean, default=False)


class RespostaAluno(db.Model):
    __tablename__ = 'resposta_aluno'
    id_resposta = db.Column(db.Integer, primary_key=True)
    id_pergunta = db.Column(db.Integer, db.ForeignKey('pergunta.id_pergunta'), nullable=False)
    id_aluno = db.Column(db.Integer, db.ForeignKey('aluno.id_aluno'), nullable=False)
    id_opcao = db.Column(db.Integer, db.ForeignKey('opcao.id_opcao'))
    data_resposta = db.Column(db.DateTime, default=datetime.utcnow)


class Avaliacao(db.Model):
    __tablename__ = 'avaliacao'
    id_avaliacao = db.Column(db.Integer, primary_key=True)
    id_quiz = db.Column(db.Integer, db.ForeignKey('quiz.id_quiz'), nullable=False)
    id_aluno = db.Column(db.Integer, db.ForeignKey('aluno.id_aluno'), nullable=False)
    nota = db.Column(db.Numeric(5,2))
    data_avaliacao = db.Column(db.DateTime, default=datetime.utcnow)
