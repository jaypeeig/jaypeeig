var express = require('express'),
 	port = Number(process.env.PORT || 1000),
 	app = express(),
 	bodyParser = require("body-parser"),
 	semaphore = require('semaphore-sms'),
 	sendgrid  = require('sendgrid')('jaypeeig', 'no.shutdown27');
	semaphore.set_api_key("BGyXimcNxishkBmwhCvw");

app
	.use(express.static('./public'))
	.use(bodyParser.urlencoded())
	.post('/email', function(req, res){
		
		sendgrid.send({
		  to:       'jay.ign@leekie.com',
		  from:     req.body.email,
		  subject:  'Portfolio Connect: ' + req.body.named,
		  text:     req.body.mess
		}, function(err, json) {
		  if (err) { return console.error(err); }
		  console.log(json);
		  res.send('email process done');
		});
		
	})

	.post('/sms', function(req,res){

		 semaphore.send_sms(req.body.numb, "From: " + req.body.rcpt + "\n\n" +req.body.txtmsg, req.body.rcpt, function(response) {  
		  if (response.status === 'success') {
		  	res.send("<p class='text-success'>SMS Sent  <sapn class='glyphicon glyphicon-send'></span></p>");
		    console.log('sent');
		  }else{
		  	res.send("<p class='text-danger'>Sending failed!  <sapn class='glyphicon glyphicon-remove'></span></p>");
		  	console.log('failed');
		  }		  
		});
	})

	.get('/files/', function(req, res){
		res.status(404).send("your'e not allowed here!");
	})

	.get('*', function(req, res){
		res.sendfile('public/main.html');
	})



	.listen(port, function(){
		console.log('The server is listening @ port: 1000');
	});
