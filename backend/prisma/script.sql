DROP DATABASE bancopi;
CREATE DATABASE bancopi;
USE bancopi;

-- CreateTable
CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
);

-- CreateTable
CREATE TABLE Motorista (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    foto VARCHAR(255)
);

-- CreateTable
CREATE TABLE Onibus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(10) NOT NULL
);


-- CreateTable
CREATE TABLE Cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuarioId INT,
    nome VARCHAR(255) NOT NULL,
    saldo DECIMAL(10, 2) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    cartao VARCHAR(1) 
    FOREIGN KEY (usuarioId) REFERENCES Usuario (id) ON DELETE SET NULL ON UPDATE CASCADE
);



-- CreateTable
CREATE TABLE Linha (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    origem VARCHAR(255) NOT NULL,
    destino VARCHAR(255) NOT NULL,
    horarioPartida TIME NOT NULL,
    duracao INT NOT NULL
);



-- CreateTable
CREATE TABLE Viagem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    linhaId INT NOT NULL,
    motoristaId INT NOT NULL,
    onibusId INT NOT NULL,
    dataPartida DATETIME NOT NULL,
    dataChegada DATETIME NOT NULL,
    FOREIGN KEY (linhaId) REFERENCES Linha (id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (motoristaId) REFERENCES Motorista (id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (onibusId) REFERENCES Onibus (id) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE Embarque (
    id INT AUTO_INCREMENT PRIMARY KEY,
    clienteId INT NOT NULL,
    viagemId INT NOT NULL,
    tarifa DECIMAL(10, 2) NOT NULL,
    horario DATETIME NOT NULL,
    FOREIGN KEY (clienteId) REFERENCES Cliente (id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (viagemId) REFERENCES Viagem (id) ON DELETE RESTRICT ON UPDATE CASCADE
);