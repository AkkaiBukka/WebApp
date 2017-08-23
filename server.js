//Initialize our express web framework
var express = require('express');

var app = express();
//The port number where we are going to listen
var port = '8080';
// Native Nodejs module for resolving paths
var path = require('path');
// Set our View Engine to EJS and set the directory to where our views will be present
app.set('view engine', 'jade');
app.set('views', path.resolve(__dirname, 'client/js'));
//Set the path to load the static js files
app.use(express.static(path.resolve(__dirname, 'client')));

var requestRouter = express.Router();

requestRouter
.get('/resources/custom/PhotographyLife/jsp/resourceViewZen.jsp', function (req, res) {
	var resourceViewZen = require('./mocked-services/resourceViewZen');
	resourceViewZen.sendData(req, res);
})
.put('/resources/custom/PhotographyLife/jsp/resourceViewZen.jsp', function (req, res) {
	console.log('OK');
});

app.use('/', requestRouter);

//Set our entry point after the webpage loads
app.get('/webapp', function(req, res) {
	res.render('index.jade');
});
// The port where we will listen
app.listen(port, function() {
	console.log('Server Running...' + port);
});