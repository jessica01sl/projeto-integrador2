var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;



//listar usuario pronto funcionando-----------------------------------------------
router.get('/listar', async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


//criar usuario-------------------------------------

//delete usuario------------------------------------------

//atualizar usuario--------------------------------------------

//pesquiasar usuario----------------------------------------------
