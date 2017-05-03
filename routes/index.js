var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render('index.html');
});

router.get('/page-2', function(req, res, next){
	res.render('index2.html');
});

module.exports = router;