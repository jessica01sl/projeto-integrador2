var express = require('express');
var router = express.Router();






//rota da CATRACA COLOCAR NO LUGAR CORERETO
router.get('/', function(req, res, next) {
    res.render('pages/catraca/tela', { title: 'Painel do Administrador', layout: 'layout/catracalayout' });
  });
  router.get('/index', function(req, res, next) {
    res.render('pages/catraca/index', { title: 'Painel do Administrador', layout: 'layout/catracalayout' });
  });
  router.get('/', function(req, res, next) {
    res.render('pages/catraca/negado', { title: 'Painel do Administrador', layout: 'layout/catracalayout' });
  });
  router.get('/liberado', function(req, res, next) {
    res.render('pages/catraca/liberado', { title: 'Painel do Administrador', layout: 'layout/catracalayout' });
  });
  router.get('/semsaldo', function(req, res, next) {
    res.render('pages/catraca/semsaldo', { title: 'Painel do Administrador', layout: 'layout/catracalayout' });
  });

  



  
module.exports = router;
