var express = require('express');
var router = express.Router();

router.get('/cadastrar', function(req, res, next) {
  res.render('linhas/cadastrar');
});

router.get('/qtd-horarios-por-linha', function(req, res, next) {
  res.render('linhas/qtdHorariosPorLinha');
});

module.exports = router;
