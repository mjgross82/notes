// Dependencies
const express = require("express");

// Configure Express server
const app = express();

// Set a port
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(express.static("routes"));

// Direct server to the API and HTML routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener to start the server.
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});