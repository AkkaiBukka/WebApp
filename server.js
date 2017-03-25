//Initialize our express web framework
var express = require('express');

var app = express();
//The port number where we are going to listen
var port = '8080';
// Native Nodejs module for resolving paths
var path = require('path');
// Set our View Engine to EJS and set the directory to where our views will be present
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));
//Set the path to load the static js files
app.use(express.static(path.resolve(__dirname, 'client')));

//Set our entry point after the webpage loads
app.get('/webapp', function(req, res) {
	res.render('index.ejs');
});
// The port where we will listen
app.listen(port, function() {
	console.log('Server Running...' + port);
});