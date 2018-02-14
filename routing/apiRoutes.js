// Your apiRoutes.js file should contain two routes:

// res ==> to send data
//req ==> to receive data

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

	app.post('/friends', function (req, res) {
		var thisUser = req.body;
		var differences = [];
		//for each answer, compare the answers and add the value of the difference of the total difference
		for (var i = 0; i < thisUser.answers.length; i++){
			
		}

	res.send('POST request to the survey')

	  console.log(req.body);
	})
};



module.exports = apiRoutes;