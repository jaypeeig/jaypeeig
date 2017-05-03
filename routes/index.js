var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render('index.html');
});

router.get('/page-2', function(req, res, next){
	res.render('index_2.html');
});

module.exports = router;