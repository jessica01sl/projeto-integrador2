var express = require('express');
var router = express.Router();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get('/listar', async (req, res) => {
  try {
    const linha = await prisma.linha.findMany(); 
    res.status(200).json(linha);
  } catch (error) {
    console.error('Erro ao buscar linhas:', error);
    res.status(500).send('Erro ao buscar linhas');
  }
});

// no gpt: envia o codigo do schema prisma, "express prisma rota/endpoint para ..."
// quando gerar o codigo trocar de app.js para router.get

// cadastrar linha
router.post('/cadastrar', async (req, res) => {
  try {
    const { nome, origem, destino, horarioPartida, duracao } = req.body;

    // Crie uma nova linha express no banco de dados
    const novaLinha = await prisma.linha.create({
      data: {
        nome,
        origem,
        destino,
        horarioPartida,
        duracao,
      },
    });

    res.json(novaLinha);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar a nova linha express' });
  }
});
// atualizar o linha

// deletar o linha 

// buscar um motorista por id

module.exports = router;
