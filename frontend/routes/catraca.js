var express = require('express');
var router = express.Router();






//rota da CATRACA COLOCAR NO LUGAR CORERETO

// aproximar cartão, liberar, sem saldo, erro desconhecido
router.get('/', function(req, res, next) {
    res.render('pages/catraca/aproximar', { title: 'Painel do Administrador', layout: 'layout/catracalayout' });
  });
  router.get('/liberado', function(req, res, next) {
    res.render('pages/catraca/liberado', { title: 'Painel do Administrador', layout: 'layout/catracalayout' });
  });
  router.get('/semsaldo', function(req, res, next) {
    res.render('pages/catraca/semsaldo', { title: 'Painel do Administrador', layout: 'layout/catracalayout' });
  });
  router.get('/error', function(req, res, next) {
    res.render('pages/catraca/error', { title: 'Painel do Administrador', layout: 'layout/catracalayout' });
  });





  
module.exports = router;
