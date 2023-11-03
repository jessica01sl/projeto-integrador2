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

// cadastro de onibus 

router.post('/cadastrar', async (req, res) => {
  try {
    const { placa } = req.body;

    // Crie um novo ônibus no banco de dados usando Prisma
    const novoOnibus = await prisma.onibus.create({
      data: {
        placa: placa
      }
    });

    res.status(201).json(novoOnibus);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar o ônibus' });
  }
});
 
// UPDATE EDIÇÃO DE PLACA DO ONIBUS ABAIXO
router.put('/atualizar/:id', async (req, res) => {
  const { id } = req.params; // Obtém o ID do ônibus a ser editado a partir dos parâmetros da URL
  const { placa, viagem } = req.body; // Obtém os dados a serem atualizados a partir do corpo da requisição

  try {
    const updatedOnibus = await prisma.onibus.update({
      where: { id: Number(id) },
      data: {
        placa,
        viagem: {
          set: viagem // Substitui as viagens existentes com as novas viagens fornecidas no corpo da requisição
        },
      },
    });

    res.json(updatedOnibus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao editar o ônibus' });
  }
});

//deletar onibus do banco

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params; // Obtém o ID do ônibus a ser excluído a partir dos parâmetros da URL

  try {
    const deletedOnibus = await prisma.onibus.delete({
      where: { id: Number(id) },
    });

    res.json({ message: 'Ônibus excluído com sucesso', deletedOnibus });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o ônibus' });
  }
});




module.exports = router;
