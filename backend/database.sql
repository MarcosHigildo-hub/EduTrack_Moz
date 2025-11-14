
CREATE DATABASE IF NOT EXISTS xeime_edu CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
USE xeime_edu;

CREATE TABLE IF NOT EXISTS Role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS Utilizador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    role_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_utilizador_role FOREIGN KEY (role_id) REFERENCES Role(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS Turma (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    ano_escolar VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS Aluno (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilizador_id INT,
    turma_id INT,
    progresso TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_aluno_utilizador FOREIGN KEY (utilizador_id) REFERENCES Utilizador(id),
    CONSTRAINT fk_aluno_turma FOREIGN KEY (turma_id) REFERENCES Turma(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS Professor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilizador_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_professor_utilizador FOREIGN KEY (utilizador_id) REFERENCES Utilizador(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS Encarregado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilizador_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_encarregado_utilizador FOREIGN KEY (utilizador_id) REFERENCES Utilizador(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS AssociacaoEncarregadoAluno (
    id INT AUTO_INCREMENT PRIMARY KEY,
    encarregado_id INT,
    aluno_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_assoc_enc_aluno FOREIGN KEY (encarregado_id) REFERENCES Encarregado(id),
    CONSTRAINT fk_assoc_aluno FOREIGN KEY (aluno_id) REFERENCES Aluno(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS PlanoAcademico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    professor_id INT,
    disciplina VARCHAR(100),
    conteudo TEXT,
    data_upload DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_plano_professor FOREIGN KEY (professor_id) REFERENCES Professor(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS Teste (
    id INT AUTO_INCREMENT PRIMARY KEY,
    professor_id INT,
    disciplina VARCHAR(100),
    data_entrega DATE,
    topicos TEXT,
    estado VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_teste_professor FOREIGN KEY (professor_id) REFERENCES Professor(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS Quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    conteudo TEXT,
    nota FLOAT,
    estado VARCHAR(20),
    data_realizacao DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_quiz_aluno FOREIGN KEY (aluno_id) REFERENCES Aluno(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS TPC (
    id INT AUTO_INCREMENT PRIMARY KEY,
    professor_id INT,
    disciplina VARCHAR(100),
    pagina_livro VARCHAR(50),
    data_criacao DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_tpc_professor FOREIGN KEY (professor_id) REFERENCES Professor(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS TPC_Status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    tpc_id INT,
    status ENUM('Fez','Nao fez') DEFAULT 'Nao fez',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_tpcstatus_aluno FOREIGN KEY (aluno_id) REFERENCES Aluno(id),
    CONSTRAINT fk_tpcstatus_tpc FOREIGN KEY (tpc_id) REFERENCES TPC(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS Feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quiz_id INT,
    conteudo TEXT,
    data DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_feedback_quiz FOREIGN KEY (quiz_id) REFERENCES Quiz(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS Relatorio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    tipo ENUM('desempenho','administrativo'),
    data_geracao DATE,
    caminho_arquivo VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_relatorio_aluno FOREIGN KEY (aluno_id) REFERENCES Aluno(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS Notificacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilizador_id INT,
    tipo VARCHAR(50),
    conteudo TEXT,
    data_envio DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_notificacao_utilizador FOREIGN KEY (utilizador_id) REFERENCES Utilizador(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS Task (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255),
    descricao TEXT,
    tipo VARCHAR(50),
    professor_id INT NULL,
    aluno_id INT NULL,
    turma_id INT NULL,
    data_inicio DATETIME NULL,
    data_entrega DATETIME NULL,
    estado VARCHAR(30) DEFAULT 'pendente',
    prioridade TINYINT DEFAULT 2,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_task_professor FOREIGN KEY (professor_id) REFERENCES Professor(id),
    CONSTRAINT fk_task_aluno FOREIGN KEY (aluno_id) REFERENCES Aluno(id),
    CONSTRAINT fk_task_turma FOREIGN KEY (turma_id) REFERENCES Turma(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;