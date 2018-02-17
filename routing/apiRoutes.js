// Your apiRoutes.js file should contain two routes:

// res ==> to send data
//req ==> to receive data

var bodyParser = require('body-parser');

var data = require("./../app/data/friends.json");

var apiRoutes = function(app){
	// Basic route that sends the user first to the AJAX Page
	app.get("/friends", function(req, res) {
		// A GET route with the url /api/friends. 
		//This will be used to display a JSON of all possible friends.
	  res.json({ data: data });
	});

	// POST method route = receive what the client is sending, get info, send a response back
	// A POST routes /api/friends. 
	//This will be used to handle incoming survey results. 
	//This route will also be used to handle the compatibility logic.

	app.post('/survey', function (req, res) {
		// parse application/x-www-form-urlencoded
		app.use(bodyParser.urlencoded({ extended: false }));		 
		// parse application/json
		app.use(bodyParser.json());

		console.log(req.body);

		// format for sending for with dropdown

		// var value = $(".chosen-single").val();
	
	//for each answer, compare the answers and add the value of the difference of 
	//the total difference
		

	// res.send('POST request to the survey')

	 
	})
};



module.exports = apiRoutes;