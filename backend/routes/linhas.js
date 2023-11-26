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
router.post("/cadastrar", async (req, res, next) => {
  try {
    const { nome, origem, destino, horarioPartida, duracao } = req.body;

    const novaLinha = await prisma.linha.create({
      data: {
        nome,
        origem,
        destino,
        horarioPartida: `1970-01-01T${horarioPartida}:00Z`,
        duracao: parseInt(duracao)
      },
    });

    res.json(novaLinha);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar a linha." });
  }
});





// atualizar o linha 
router.patch('/editar/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, origem, destino, horarioPartida, duracao } = req.body;

  try {
    // Converta a string para número (caso duracao seja fornecida como string)
    const duracaoInt = parseInt(duracao);

    // Atualize as informações da linha no banco de dados
    const linhaAtualizada = await prisma.linha.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        origem,
        destino,
        horarioPartida,
        duracao: duracaoInt,
      },
    });

    res.json({ mensagem: 'Linha atualizada com sucesso', linha: linhaAtualizada });
  } catch (error) {
    console.error('Erro ao atualizar a linha:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});





// deletar o linha completo funcional
router.delete('/excluir/:id', async (req, res) => {
  try {
    const linhaId = parseInt(req.params.id);

    // Verifique se a linha existe antes de tentar excluí-la
    const linhaExistente = await prisma.linha.findUnique({
      where: { id: linhaId },
    });

    if (!linhaExistente) {
      return res.status(404).json({ error: 'Linha não encontrada' });
    }

    // Exclua a linha express do banco de dados
    await prisma.linha.delete({
      where: { id: linhaId },
    });

    res.status(204).send(); // Retorna uma resposta vazia para indicar que a exclusão foi bem-sucedida
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});












// buscar um linhas por id



router.get('/puxar/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Consultando a linha pelo ID usando o Prisma
    const linha = await prisma.linha.findUnique({
      where: { id: parseInt(id) },
      include: { viagem: true }, // Incluindo relacionamento com viagem se necessário
    });

    // Verificando se a linha foi encontrada
    if (!linha) {
      return res.status(404).json({ error: 'Linha não encontrada' });
    }

    // Retornando os dados da linha
    res.json(linha);
  } catch (error) {
    console.error('Erro ao buscar a linha:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});



module.exports = router;
