var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('pages/adm/index', { title: 'Painel do Administrador', layout: 'layouts/layout' });
});

module.exports = router;
