// Dependencies
var path = require("path");

// Routing
module.exports = function(app) {

    // Show notes.html when the uder visits accesses that page
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // Default to index.html if no matching route is found
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Direct the server to styles.css and index.js
    app.get("../public/assets/css/styles.css", function (req, res) {
        res.sendFile(path.join(__dirname, "/public/assets/css/styles.css"));
      });

    app.get("../public/assets/js/index.js", function (req, res) {
        res.sendFile(path.join(__dirname, "/public/assets/js/index.js"));
      });
}