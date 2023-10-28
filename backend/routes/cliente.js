var express = require('express');
var router = express.Router();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get('/listar', async (req, res) => {
    try {
      const clientes = await prisma.cliente.findMany();
      res.json(clientes);
    } catch (error) {
      console.error('Erro ao obter clientes:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  });
 
// no gpt: envia o codigo do schema prisma, "express prisma rota/endpoint para ..."
// quando gerar o codigo trocar de app.js para router.get

// cadastrar motorista

// atualizar o motorista

// deletar o motorista

// buscar um motorista por id

module.exports = router;
