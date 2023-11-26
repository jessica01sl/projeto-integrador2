var express = require('express');
var router = express.Router();






//rota da CATRACA COLOCAR NO LUGAR CORERETO
router.get('/', function(req, res, next) {
    res.render('pages/catraca/tela', { title: 'Painel do Administrador', layout: 'layout/vazio' });
  });
  



  
module.exports = router;
