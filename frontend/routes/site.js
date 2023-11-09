var express = require('express');
var router = express.Router();



// INDEX DO SITE PUBLICO
router.get('/publico', function(req, res, next) {
    res.render('pages/site/index', { title: 'Painel do Administrador', layout: 'layout/layout' });
  });