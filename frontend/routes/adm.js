var express = require('express');
var router = express.Router();


// abaixo rota adm cadastro de adm index pagina inicial da adm
router.get('/', function(req, res, next) {
  res.render('pages/adm/index', { title: 'Painel do Administrador', layout: 'layout/layout' });
});




// aqui voce cria uma rota cria um organização la em cima só da parte adm , por exemplo /motorista é onde fica a base dos motoristas e abaixo do barra temos o caminho para o arquivo e falarndo que vai usar o layout padrao e renderizar o que tiver no caminho passadp
// abaixo esta toda a parte de motorista



// rota de motorista da pagina de adm
router.get('/motorista', function(req, res, next) {
  res.render('pages/adm/motoristas', { title: 'Painel do Administrador', layout: 'layout/layout' });
});
// rota de motorista da pagina de cadastro 
router.get('/motorista/cadastrar', function(req, res, next) {
  res.render('pages/adm/cadastromotorista', { title: 'Painel do Administrador', layout: 'layout/layout' });
});
// rota de motorista da pagina de EDIÇÃO 
router.get('/motorista/editar/:id', function(req, res, next) {
  res.render('pages/adm/editarmotorista', { title: 'Painel do Administrador', layout: 'layout/layout' });
});








//rota de cliente
router.get('/cliente', function(req, res, next) {
  res.render('pages/adm/cliente', { title: 'Painel do Administrador', layout: 'layout/layout' });
});





//rota de onibus 
router.get('/onibus', function(req, res, next) {
  res.render('pages/adm/onibus', { title: 'Painel do Administrador', layout: 'layout/layout' });
});

// rota de linhas 
router.get('/linhas', function(req, res, next) {
  res.render('pages/adm/linhas', { title: 'Painel do Administrador', layout: 'layout/layout' });
});

//rota de login da adm 
router.get('/login', function(req, res, next) {
  res.render('pages/adm/login', { title: 'Painel do Administrador', layout: 'layout/vazio' });
});


//rota de cadastro da adm 
router.get('/cadastrar', function(req, res, next) {
  res.render('pages/adm/cadastrar', { title: 'Painel do Administrador', layout: 'layout/vazio' });
});




module.exports = router;
