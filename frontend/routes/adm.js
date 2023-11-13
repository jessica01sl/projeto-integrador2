var express = require('express');
var router = express.Router();






// abaixo rota adm cadastro de adm index pagina inicial da adm
router.get('/', function(req, res, next) {
  res.render('pages/adm/index', { title: 'Painel do Administrador', layout: 'layout/layout' });
});





// abaixo esta toda a parte de 



// rota de motorista da pagina de adm
router.get('/motorista', function(req, res, next) {
  res.render('pages/adm/motoristas', { title: 'Painel do Administrador', layout: 'layout/layout' });
});

// rota de motorista da pagina de cadastro 
router.get('/motorista/cadastrar', function(req, res, next) {
  res.render('pages/adm/cadastromotorista', { title: 'Painel do Administrador', layout: 'layout/layout' });
});















//rota de onibus 
router.get('/onibus', function(req, res, next) {
  res.render('pages/adm/motoristas', { title: 'Painel do Administrador', layout: 'layout/layout' });
});

// rota de linhas 
router.get('/linhas', function(req, res, next) {
  res.render('pages/adm/motoristas', { title: 'Painel do Administrador', layout: 'layout/layout' });
});

//rota de login da adm 
router.get('/login', function(req, res, next) {
  res.render('pages/adm/login', { title: 'Painel do Administrador', layout: 'layout/layout' });
});


//rota de cadastro da adm 
router.get('/cadastrar', function(req, res, next) {
  res.render('pages/adm/cadastrar', { title: 'Painel do Administrador', layout: 'layout/layout' });
});

module.exports = router;
