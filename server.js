//this is a restful api 
//rest api
//rest service

var express = require('express');
var app = express();
var methodOverride = require('method-override')

//we do this because we want PUT and DELETE methods for our routes
//integrate method override with express
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//to be able to use app.post
//body-parser allows us to access the body of a request, which we need when doing a post route	
var bodyParser = require('body-parser')

//integrate body-parser with express

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//making static assets
app.use(express.static("public"));


var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'superpassword',
	database: 'prezidents_db'
});

connection.connect();

app.get('/presidents', function (req, res) {
	connection.query('SELECT * FROM presidents', function (error, results, fields) {
		if (error) res.send(error)
		else res.json(results);
	});
});

// by default the forms use req.query so let's not fight it
//localhost:3000/insert?pres_name=justin
//what's the point of using a post route?
//with get routes, you can hit them in the browser
//with post routes, you can't access them from the browser 
//also with post routes, you can send much more info, because you're not limited to the url length limit
app.post('/insert', function (req, res) {
	// res.json(req.query);

	if (req.body.pres_name.length > 1) {
		connection.query('INSERT INTO presidents (pres_name) VALUES (?)', [req.body.pres_name], function (error, results, fields) {
			if (error) res.send(error)
			else res.redirect('/');
		});
	} else {
		res.send('invalid name')
	}
});

//localhost:3000/remove?id=3
app.delete('/delete', function (req, res) {
	// res.json(req.body);

	if (req.body.id) {
		// ; DELETE FROM people;
		// '1 AND DELETE FROM people'
		connection.query('DELETE FROM presidents WHERE id = ?', [req.body.id], function (error, results, fields) {
			if (error) res.send(error)
			else res.redirect('/');
		});
	} else {
		res.send('you need an id')
	}
});

//localhost:3000/update?id=3&name=newname
app.put('/update', function (req, res) {
	// res.json(req.body);

	if (req.body.id && req.body.pres_name.length > 1) {
		connection.query('UPDATE presidents SET pres_name = ? WHERE id = ?', [req.body.pres_name, req.body.id], function (error, results, fields) {
			if (error) res.send(error)
			else res.redirect('/');
		});
	} else {
		res.send('you need an id')
	}
});



app.listen(3000, function () {
	console.log('listening on 3000');
});









