var express = require('express');
var bodyParser = require('body-parser');
// var path = require('path'); 
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

//express.static links to public folder and all its content inc css and js
app.use(express.static('public')); 

var htmlRoutes = require("./routing/htmlRoutes");
var apiRoutes = require("./routing/apiRoutes");

htmlRoutes(app);  //Linked to HTML Routes
apiRoutes(app);	//Linked to API Routes

app.listen(3000, () => console.log('App is listening on port 3000!'));
