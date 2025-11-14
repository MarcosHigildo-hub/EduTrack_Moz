
from . import db
from datetime import datetime

class Turma(db.Model):
    __tablename__ = 'turma'
    id_turma = db.Column(db.Integer, primary_key=True)
    nome_turma = db.Column(db.String(50), nullable=False)
    ano_lectivo = db.Column(db.Integer, nullable=False)


class Aluno(db.Model):
    __tablename__ = 'aluno'
    id_aluno = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuario.id_usuario'), nullable=False)
    id_turma = db.Column(db.Integer, db.ForeignKey('turma.id_turma'), nullable=False)
    data_nascimento = db.Column(db.Date)

    usuario = db.relationship('Usuario', backref=db.backref('aluno', uselist=False))
    turma = db.relationship('Turma', backref='alunos')


class Encarregado(db.Model):
    __tablename__ = 'encarregado'
    id_encarregado = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuario.id_usuario'), nullable=False)
    contacto = db.Column(db.String(20))

    usuario = db.relationship('Usuario', backref=db.backref('encarregado', uselist=False))


class AssociacaoAlunoEncarregado(db.Model):
    __tablename__ = 'associacao_aluno_encarregado'
    id_aluno = db.Column(db.Integer, db.ForeignKey('aluno.id_aluno'), primary_key=True)
    id_encarregado = db.Column(db.Integer, db.ForeignKey('encarregado.id_encarregado'), primary_key=True)


class Disciplina(db.Model):
    __tablename__ = 'disciplina'
    id_disciplina = db.Column(db.Integer, primary_key=True)
    nome_disciplina = db.Column(db.String(100), nullable=False)
    id_professor = db.Column(db.Integer, db.ForeignKey('usuario.id_usuario'), nullable=False)


class Conteudo(db.Model):
    __tablename__ = 'conteudo'
    id_conteudo = db.Column(db.Integer, primary_key=True)
    id_disciplina = db.Column(db.Integer, db.ForeignKey('disciplina.id_disciplina'), nullable=False)
    titulo = db.Column(db.String(150), nullable=False)
    descricao = db.Column(db.Text)
    tipo_ficheiro = db.Column(db.String(50))
    caminho_ficheiro = db.Column(db.String(255))
    data_envio = db.Column(db.DateTime, default=datetime.utcnow)


class TPC(db.Model):
    __tablename__ = 'tpc'
    id_tpc = db.Column(db.Integer, primary_key=True)
    id_disciplina = db.Column(db.Integer, db.ForeignKey('disciplina.id_disciplina'), nullable=False)
    descricao = db.Column(db.Text, nullable=False)
    pagina_livro = db.Column(db.String(20))
    data_envio = db.Column(db.DateTime, default=datetime.utcnow)
    data_limite = db.Column(db.DateTime)


class EstadoTPC(db.Model):
    __tablename__ = 'estado_tpc'
    id_tpc = db.Column(db.Integer, db.ForeignKey('tpc.id_tpc'), primary_key=True)
    id_aluno = db.Column(db.Integer, db.ForeignKey('aluno.id_aluno'), primary_key=True)
    estado = db.Column(db.Enum('Fez', 'Não fez'), default='Não fez')
