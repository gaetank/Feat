var twig = require('twig');
var express = require('express');
var router = express.Router();

/* GET food listing. */
router.get('/', function(req, res, next) {
  res.render('food/food.twig');
});

/* GET a particular food */
router.get('/:id', function(req, res, next) {
  res.render('food/food.twig', { foodId: req.params.id });
});

module.exports = router;
