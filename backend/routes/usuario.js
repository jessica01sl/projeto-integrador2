var express = require('express');
var router = express.Router();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get('/listar', async (req, res) => {
    try {
      const usuarios = await prisma.usuario.findMany();
      res.json(usuarios);
    } catch (error) {
      console.error('Erro ao obter usuários:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  });
  
// no gpt: envia o codigo do schema prisma, "express prisma rota/endpoint para ..."
// quando gerar o codigo trocar de app.js para router.get

// usuario cadastar funcionando
router.post('/cadastar', async (req, res) => {
  try {
    const { nome, email, senha, token } = req.body;

    // Crie um novo usuário no banco de dados
    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha,
        token,
      },
    });

    res.status(201).json(novoUsuario); // Retorna o novo usuário criado como resposta
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});















// atualizar o motorista
router.put('/atualizar/:id', async (req, res) => {
  try {
    const usuarioId = parseInt(req.params.id);
    const { nome, email, senha, token } = req.body;

    // Verifique se o usuário existe antes de tentar atualizá-lo
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { id: usuarioId },
    });

    if (!usuarioExistente) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Atualize as informações do usuário no banco de dados
    const usuarioAtualizado = await prisma.usuario.update({
      where: { id: usuarioId },
      data: {
        nome,
        email,
        senha,
        token,
      },
    });

    res.status(200).json(usuarioAtualizado); // Retorna o usuário atualizado como resposta
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});











// deletar o usuario funcional=---------------------------
router.delete('/excluir/:id', async (req, res) => {
  try {
    const usuarioId = parseInt(req.params.id);

    // Verifique se o usuário existe antes de tentar excluí-lo
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { id: usuarioId },
    });

    if (!usuarioExistente) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Exclua o usuário do banco de dados
    await prisma.usuario.delete({
      where: { id: usuarioId },
    });

    res.status(204).send(); // Retorna uma resposta vazia para indicar que a exclusão foi bem-sucedida
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});







// buscar um usuario por id

router.get('/pesquisaid/:id', async (req, res) => {
  try {
    const usuarioId = parseInt(req.params.id);

    // Busque o usuário no banco de dados pelo ID
    const usuario = await prisma.usuario.findUnique({
      where: { id: usuarioId },
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
