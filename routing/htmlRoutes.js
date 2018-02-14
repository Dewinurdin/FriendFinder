// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// Routes
// =========================================================================================


var path = require('path'); //relative windows or Mac path

var htmlRoutes = function(app){
	// ROUTE TO HTML PAGE
	app.get("/", function(req, res) {
	 	res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	// ROUTE TO SURVEY PAGE
	app.get("/survey", function(req, res) {
	 res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});
};

module.exports = htmlRoutes;

