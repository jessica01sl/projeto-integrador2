var express = require('express');
var router = express.Router();



// INDEX DO SITE PUBLICO
router.get('/publico', function(req, res, next) {
    res.render('pages/site/index', { title: 'site publico', layout: 'layout/clean' });
  });
  
  
  




  module.exports = router;