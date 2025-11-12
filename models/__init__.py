from extensions import db

from .usuario import Usuario
from .papel import Papel, Permissao, UsuarioPapel, PapelPermissao
from .academico import Turma, Aluno, Encarregado, AssociacaoAlunoEncarregado, Disciplina, Conteudo, TPC, EstadoTPC
from .quiz import Quiz, Pergunta, Opcao, RespostaAluno, Avaliacao
from .notificacao import Notificacao
from .models import Role, Utilizador

__all__ = [
	'db', 'Role', 'Utilizador', 'Usuario', 'Papel', 'Permissao', 'UsuarioPapel', 'PapelPermissao',
	'Turma', 'Aluno', 'Encarregado', 'AssociacaoAlunoEncarregado', 'Disciplina', 'Conteudo', 'TPC', 'EstadoTPC',
	'Quiz', 'Pergunta', 'Opcao', 'RespostaAluno', 'Avaliacao', 'Notificacao'
]
