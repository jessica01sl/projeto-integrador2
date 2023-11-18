var express = require('express');
var router = express.Router();



// INDEX DO SITE PUBLICO
router.get('/home', function (req, res, next) {
  res.render('pages/site/index', { title: 'site publico', layout: 'layout/clean' });
});

// recarga DO SITE PUBLICO
router.get('/recarga', function (req, res, next) {
  res.render('pages/site/recarga', { title: 'site publico', layout: 'layout/vazio' });
});

// horarios DO SITE PUBLICO
router.get('/horarios', function (req, res, next) {
  res.render('pages/site/horarios', { title: 'site publico', layout: 'layout/clean' });
});



// criar cartão DO SITE PUBLICO
router.get('/cartao', function (req, res, next) {
  res.render('pages/site/criarcartao', { title: 'site publico', layout: 'layout/clean' });
});

// ajuda cartão DO SITE PUBLICO
router.get('/ajuda', function (req, res, next) {
  res.render('pages/site/ajuda', { title: 'site publico', layout: 'layout/clean' });
});

// termos de uso  DO SITE PUBLICO
router.get('/termos', function (req, res, next) {
  res.render('pages/site/termos', { title: 'site publico', layout: 'layout/clean' });
});


// perfil de uso DO SITE PUBLICO
router.get('/perfil', function (req, res, next) {
  res.render('pages/site/perfil', { title: 'site publico', layout: 'layout/clean' });
});




// LOGIN Cde uso DO SITE PUBLICO
router.get('/login', function (req, res, next) {
  res.render('pages/site/login', { title: 'site publico', layout: 'layout/vazio' });
});


// CADASTRAR de uso DO SITE PUBLICO
router.get('/cadastrar', function (req, res, next) {
  res.render('pages/site/cadastrar', { title: 'site publico', layout: 'layout/vazio' });
});


module.exports = router;