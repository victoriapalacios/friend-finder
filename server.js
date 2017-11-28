// Dependency for express
var express = require('express')

var app = express();
var port = 3000;

// Dependency for body-parser
var bodyParser = require('body-parser')

// Parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var path = require('path')

//////////////////////////////////

// Below is how we point our server to the routing files that defines URLs
require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);

//////////////////////////////////

// Below is where we tell node to listen on localhost
app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});

