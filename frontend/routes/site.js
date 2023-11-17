var express = require('express');
var router = express.Router();



// INDEX DO SITE PUBLICO
router.get('/home', function (req, res, next) {
  res.render('pages/site/index', { title: 'site publico', layout: 'layout/clean' });
});

// recarga DO SITE PUBLICO
router.get('/home/recarga', function (req, res, next) {
  res.render('pages/site/recarga', { title: 'site publico', layout: 'layout/vazio' });
});

// horarios DO SITE PUBLICO
router.get('/home/horarios', function (req, res, next) {
  res.render('pages/site/horarios', { title: 'site publico', layout: 'layout/clean' });
});

// entrar DO SITE PUBLICO
router.get('/home/login', function (req, res, next) {
  res.render('pages/site/login', { title: 'site publico', layout: 'layout/clean' });
});

// cadastrar DO SITE PUBLICO
router.get('/home/cadastrar', function (req, res, next) {
  res.render('pages/site/cadastrar', { title: 'site publico', layout: 'layout/clean' });
});

// criar cartão DO SITE PUBLICO
router.get('/home/cartao', function (req, res, next) {
  res.render('pages/site/criarcartao', { title: 'site publico', layout: 'layout/clean' });
});

// ajuda cartão DO SITE PUBLICO
router.get('/home/ajuda', function (req, res, next) {
  res.render('pages/site/ajuda', { title: 'site publico', layout: 'layout/clean' });
});

// termos de uso  DO SITE PUBLICO
router.get('/home/termos', function (req, res, next) {
  res.render('pages/site/termos', { title: 'site publico', layout: 'layout/clean' });
});









module.exports = router;