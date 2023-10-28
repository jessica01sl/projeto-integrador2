var express = require('express');
var router = express.Router();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get('/listar', async (req, res) => {
    try {
      const onibus = await prisma.onibus.findMany();
      res.json(onibus);
    } catch (error) {
      console.error('Erro ao obter ônibus:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  });


 


module.exports = router;
