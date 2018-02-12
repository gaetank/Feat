var twig = require('twig');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('athletes/athletes.twig');
});

/* GET a specific athlete. */
router.get('/:id', function(req, res, next) {
  res.render('athletes/showAthlete.twig', { athleteId: req.params.id });
});

module.exports = router;
