var express = require('express');
var app = express();

var path = require('path');

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'superpassword',
	database: 'friends_db'
});

connection.connect();

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "public/index.html"));
  });

app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "public/survey.html"));
  });

  app.get("/api/friends", function(req, res){
	connection.query('SELECT * FROM friends', function (error, results, fields){
		if (error) res.send(error)
		else res.json(results);
	});
});

app.post('/api/friends', function (req, res) {
	// res.json(req.query);

	if (req.body.nam.length > 1) {
		connection.query('INSERT INTO friends (nam) VALUES (?)', [req.body.nam], function (error, results, fields) {
			if (error) res.send(error)
			else res.redirect('/');
		});
	} else {
		res.send('invalid name')
	}
});

  // app.get("/insert", function(req, res, data){
// 	connection.query('INSERT INTO friends (nam) VALUES (?)', 
// 	[req.query.nam], function (error, results, fields){
// 		if (error) res.sent(error)
// 		else res.json({
// 			message: 'success'
// 		});
// 	});
// });



  app.listen(3000, function () {
	console.log('listening on 3000');
});

