var express = require('express');
var router = express.Router();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();





// ROTA LISTAR

router.get('/listar', async (req, res) => {
  try {
    const motoristas = await prisma.motorista.findMany();
    res.status(200).json(motoristas);
  } catch (error) {
    console.error('Erro ao buscar motoristas:', error);
    res.status(500).send('Erro ao buscar motoristas');
  }
});





// ROTA cadastrar motorista
router.post('/cadastrar', async (req, res) => {
  try {
    const { nome } = req.body;

    // Crie um novo motorista no banco de dados usando Prisma
    const novoMotorista = await prisma.motorista.create({
      data: {
        nome: nome
      }
    });

    // Retorne a resposta como JSON
    res.json(novoMotorista);
  } catch (error) {
    console.error(error);
    // Se houver um erro, retorne um status de erro e a mensagem de erro
    res.status(500).json({ error: 'Erro ao cadastrar o motorista.' });
  }
});





// atualizar o motorista

router.patch('/editar/:id', async function (req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const { nome } = req.body;

    console.log("oi");
    console.log(req.params);
    console.log(req.body);
    
    console.log(nome);

    const motoristaAtualizada = await prisma.motorista.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
      },
    });

    res.json(motoristaAtualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar dados do motorista.' });
  }
});








// deletar o motorista
router.delete("/excluir/:id", async function (req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const motoristaExcluida = await prisma.motorista.delete({
      where: {
        id: id,
      },
    });

    if (motoristaExcluida) {
      res.json({ message: "motorista excluído excluído com sucesso." });
    } else {
      res.status(404).json({ error: "motorista não encontrada." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao excluir a motorista ." });
  }
});







// ROTA buscar um motorista por id

// Rota para obter um motorista por ID
router.get('/onibus/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Consultando o ônibus pelo ID usando o Prisma
    const onibus = await prisma.onibus.findUnique({
      where: { id: parseInt(id) },
      include: { viagem: true }, // Se você quiser incluir informações de viagem
    });

    // Verificando se o ônibus foi encontrado
    if (!onibus) {
      return res.status(404).json({ mensagem: 'Ônibus não encontrado' });
    }

    // Retornando os dados do ônibus
    res.status(200).json(onibus);
  } catch (error) {
    console.error('Erro ao buscar o ônibus:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
});



module.exports = router;
