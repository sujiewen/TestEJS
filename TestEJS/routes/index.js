var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/index2', function(req, res, next) {
    res.render('index2', { title: 'Express' });
});


module.exports = router;
