var twig = require('twig');
var express = require('express');
var router = express.Router();
//var mongoose =  require('../db/mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('global/index.twig', { title: 'Express', message: 'Hello World !' });
});

/* GET the registration page. */
router.get('/registration', function(req, res, next) {
  res.render('global/registration.twig');
});

/* GET the connection page. */
router.get('/login', function(req, res, next) {
  res.render('global/login.twig');
});

router.get('/logout', function(req, res, next) {
  res.render('global/login.twig');
});

module.exports = router;
