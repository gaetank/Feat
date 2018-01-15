var twig = require('twig');
var express = require('express');
var router = express.Router();
//var mongoose =  require('../db/mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.twig', { title: 'Express', message: 'Hello World !' });
});

module.exports = router;
