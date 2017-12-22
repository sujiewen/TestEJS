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


/* GET home page. */
router.get('/execB', function(req, res, next) {
    res.render('execB', { title: 'Express' });
});

/* GET home page. */
router.get('/execA', function(req, res, next) {
    res.render('execA', { title: 'Express' });
});




module.exports = router;
