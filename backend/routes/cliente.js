var express = require('express');
var router = express.Router();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();




// lisatar cliente--------------------------
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










// cadastrar cliente funcionando
router.post('/cadastrar', async (req, res) => {
  try {
    const { usuarioId, nome, saldo, cpf, cartao } = req.body;

    // Crie um novo cliente no banco de dados
    const novoCliente = await prisma.cliente.create({
      data: {
        usuarioId,
        nome,
        saldo,
        cpf,
        cartao, // Inclua o campo "cartao" na criação do cliente
      },
    });

    res.status(201).json(novoCliente); // Retorna o novo cliente criado como resposta
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


















router.patch('/recarregar', async (req, res) => {
  const { cardnumber, saldo } = req.body;
  const id = cardnumber;

  try {
    // Obtenha o cliente pelo ID
    const cliente = await prisma.cliente.findUnique({
      where: { id: Number(id) },
    });

    console.log(req.body);

    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    // Converta o saldo para um número
    const saldoNumero = Number(saldo);

    if (isNaN(saldoNumero)) {
      return res.status(400).json({ error: 'O saldo fornecido não é um número válido' });
    }

    // Some o saldo da requisição com o saldo atual do cliente
    // const saldoAtualizado = cliente.saldo ? cliente.saldo + saldoNumero : saldoNumero;
    const novoSaldo = Number(saldo) + Number(cliente.saldo);

    // Atualize o saldo do cliente no banco de dados
    const clienteAtualizado = await prisma.cliente.update({
      where: { id: Number(id) },
      data: { saldo: novoSaldo },
    });

    // console.log(clienteAtualizado);

    res.status(200).json({ id: clienteAtualizado.id, saldo: clienteAtualizado.saldo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});



// atualizar o cliente
router.patch('/atualizar/:id', async (req, res) => {
  try {
    const clienteId = parseInt(req.params.id);
    const { nome, saldoatual, cpf } = req.body;

    // Verifique se o cliente existe antes de tentar atualizá-lo
    const clienteExistente = await prisma.cliente.findUnique({
      where: { id: clienteId },
    });

    if (!clienteExistente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    // Atualize as informações do cliente no banco de dados
    const clienteAtualizado = await prisma.cliente.update({
      where: { id: clienteId },
      data: {
        nome,
        saldo: saldoatual,
        cpf,
      },
    });

    res.status(200).json(clienteAtualizado); // Retorna o cliente atualizado como resposta
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }

});














// deletar o motorista funcional ---------------------------------------------------------------

router.delete('/excluir/:id', async (req, res) => {
  try {
    const clienteId = parseInt(req.params.id);

    // Verifique se o cliente existe antes de tentar excluí-lo
    const clienteExistente = await prisma.cliente.findUnique({
      where: { id: clienteId },
    });

    if (!clienteExistente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    // Exclua o cliente do banco de dados
    await prisma.cliente.delete({
      where: { id: clienteId },
    });

    res.status(204).send(); // Retorna uma resposta vazia para indicar que a exclusão foi bem-sucedida
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});















// buscar um clientes por id funcionando
router.get('/pesquisa/:id', async (req, res) => {
  try {
    const clienteId = parseInt(req.params.id);

    // Busque o cliente no banco de dados pelo ID
    const cliente = await prisma.cliente.findUnique({
      where: { id: clienteId },
    });

    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    res.status(200).json(cliente);
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});



// Rota para excluir um cliente por ID
router.delete('/deleteid/:id', async (req, res) => {
  try {
    const clienteId = parseInt(req.params.id);

    // Verifique se o cliente existe antes de tentar excluí-lo
    const clienteExistente = await prisma.cliente.findUnique({
      where: { id: clienteId },
    });

    if (!clienteExistente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    // Exclua o cliente do banco de dados
    await prisma.cliente.delete({
      where: { id: clienteId },
    });

    res.status(204).send(); // Retorna uma resposta vazia para indicar que a exclusão foi bem-sucedida
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});





// rota para a catraca remover os 5,00 de saldo
router.patch('/tirarsaldo', async (req, res) => {
  const { cardnumber, saldo } = req.body;
  const id = cardnumber;

  try {
    // Obtenha o cliente pelo ID
    const cliente = await prisma.cliente.findUnique({
      where: { id: Number(id) },
    });

    console.log(req.body);

    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    // Converta o saldo para um número
    const saldoNumero = Number(saldo);

    if (isNaN(saldoNumero)) {
      return res.status(400).json({ error: 'O saldo fornecido não é um número válido' });
    }

    // Some o saldo da requisição com o saldo atual do cliente
    // const saldoAtualizado = cliente.saldo ? cliente.saldo + saldoNumero : saldoNumero;
    const novoSaldo = Number(saldo) - Number(cliente.saldo);

    // Atualize o saldo do cliente no banco de dados
    const clienteAtualizado = await prisma.cliente.update({
      where: { id: Number(id) },
      data: { saldo: novoSaldo },
    });

    // console.log(clienteAtualizado);

    res.status(200).json({ id: clienteAtualizado.id, saldo: clienteAtualizado.saldo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});






router.post('/liberar', async (req, res, next) => {
  const clienteId = Number(req.body.clienteId);

  console.log(clienteId);
  
  try {
    // Use uma transação Prisma para garantir atomicidade
    const novoEmbarque = await prisma.$transaction(async (prisma) => {
      // Consulte a tabela cliente para obter informações sobre a isenção e o saldo
      const cliente = await prisma.cliente.findUnique({
        where: { id: clienteId },
      });

      console.log(cliente);

      // Verifique se o cliente existe
      if (!cliente) {
        throw new Error('Cliente não encontrado');
      }

      let valorDaPassagem = 5;  // Valor padrão da passagem
      if (cliente.cartao === "1") { // comum
        valorDaPassagem = 5;
      }
      else if (cliente.cartao === "2") { // estudante
        valorDaPassagem = 2.5;
      } else { // idoso=3, pcd=4
        valorDaPassagem = 0;
      }

      const isento = cliente.cartao === "3" || cliente.cartao === "4";

      // Verifique se o cliente tem saldo suficiente
      if (!isento && cliente.saldo < valorDaPassagem) {
        throw new Error('Saldo insuficiente');
      }

      // Execute a inserção no banco de dados usando Prisma
      const embarque = await prisma.embarque.create({
        data: {
          clienteId: clienteId,
          tarifa: valorDaPassagem
        },
      });

      // Atualize o saldo do cliente se necessário usando decrement
      if (!isento) {
        await prisma.cliente.update({
          where: { id: clienteId },
          data: {
            saldo: {
              decrement: valorDaPassagem,
            },
          },
        });
      }

      return embarque;
    });

    // Envie uma resposta de sucesso
    res.status(201).json({ message: 'Embarque cadastrado com sucesso!', embarque: novoEmbarque });
  } catch (error) {
    console.error('Erro ao cadastrar embarque:', error);
    if (error.message === 'Cliente não encontrado') {
      res.status(404).json({ error: 'Cliente não encontrado' });
    } else if (error.message === 'Saldo insuficiente') {
      res.status(402).json({ error: 'Saldo insuficiente' }); // 402 Payment Required
    } else {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
});




module.exports = router;
