var express = require('express');
var router = express.Router();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


router.patch('/liberar', async (req, res) => {
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
  




















module.exports = router;
