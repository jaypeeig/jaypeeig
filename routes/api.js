var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.status(400);
	res.json({code: 'Not authorized'});
});

router.get('/gdrive-bicol', function(req, res, next){
	res.render('bicol.html');
});

module.exports = router;