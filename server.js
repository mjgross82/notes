// Dependencies
var express = require("express");

// Configure Express server
var app = express();

// Set a port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Direct the server to the routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener to start the server.
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});