-- CreateTable
CREATE TABLE "Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER,
    "nome" TEXT NOT NULL,
    "saldo" DECIMAL NOT NULL,
    "cpf" TEXT NOT NULL,
    CONSTRAINT "Cliente_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Embarque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clienteId" INTEGER NOT NULL,
    "viagemId" INTEGER NOT NULL,
    "tarifa" DECIMAL NOT NULL,
    "horario" DATETIME NOT NULL,
    CONSTRAINT "Embarque_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Embarque_viagemId_fkey" FOREIGN KEY ("viagemId") REFERENCES "Viagem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Linha" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "horarioPartida" DATETIME NOT NULL,
    "horarioChegada" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Motorista" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "foto" TEXT
);

-- CreateTable
CREATE TABLE "Onibus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "placa" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "token" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Viagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "linhaId" INTEGER NOT NULL,
    "motoristaId" INTEGER NOT NULL,
    "onibusId" INTEGER NOT NULL,
    "dataPartida" DATETIME NOT NULL,
    "dataChegada" DATETIME NOT NULL,
    CONSTRAINT "Viagem_linhaId_fkey" FOREIGN KEY ("linhaId") REFERENCES "Linha" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Viagem_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "Motorista" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Viagem_onibusId_fkey" FOREIGN KEY ("onibusId") REFERENCES "Onibus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
