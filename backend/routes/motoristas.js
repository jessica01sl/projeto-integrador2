var express = require('express');
var router = express.Router();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get('/listar', async (req, res) => {
  try {
    const motoristas = await prisma.motorista.findMany(); 
    res.status(200).json(motoristas);
  } catch (error) {
    console.error('Erro ao buscar motoristas:', error);
    res.status(500).send('Erro ao buscar motoristas');
  }
});
 
// no gpt: envia o codigo do schema prisma, "express prisma rota/endpoint para ..."
// quando gerar o codigo trocar de app.js para router.get

// cadastrar motorista

// atualizar o motorista

// deletar o motorista

// buscar um motorista por id

module.exports = router;
