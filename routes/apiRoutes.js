// Dependencies
const fs = require("fs");
const path = require("path");
let db = require("../db/db.json");

// Routing
let pathJSON = path.join(__dirname, "../db/db.json");

module.exports = function(app) {

    app.get("/api/notes", function (req, res) {
        res.json(db);
    });

    // Create a new note
    app.post("/api/notes", function (req, res) {
        db = JSON.parse(fs.readFileSync(pathJSON, "utf8"));
        let noteID = () => parseInt(100 * Math.random());
        req.body.id = noteID();
        db.push(req.body);
        let newNote = JSON.stringify(db);
        savedb(newNote);
        res.json(newNote);
    });

    // Delete a note
    app.delete("/api/notes/:id", function (req, res) {
        db = JSON.parse(fs.readFileSync(pathJSON, "utf8"));
        let id = req.params.id;
        db = db.filter(selectNote => {
            return selectNote.id != id;
        });
        let note1 = JSON.stringify(db);
        savedb(note1);
        res.json(db);
    });

    // Save a note to db.json
    let savedb = (note) => {
        fs.writeFileSync(pathJSON, note, "utf8", function (err) {
            if (err) console.log('error')
            return `Done`;
        });
    }
}