var twig = require('twig');
var express = require('express');
var router = express.Router();

/* GET food listing. */
router.get('/', function(req, res, next) {
  res.render('food/food.twig');
});

/* GET a particular food */
router.get('/reciepe/:id', function(req, res, next) {
  res.render('food/reciepe.twig', { reciepe_id: req.params.id });
});

router.get('/dish/:id', function(req, res, next) {
  res.render('food/dish.twig', { dish_id: req.params.id });
});

module.exports = router;
