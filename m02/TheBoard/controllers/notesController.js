// notesController.js
(function (notesController){

    var data = require("../data");

    notesController.init = function (app) {
        app.get("/api/notes/:categoryName", function (req, res) {

            var categoryName = req.params.categoryName;

            data.getNotes(categoryName, function (err, notes) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(notes.notes); // notes.notes will only send back the actual notes.
                }
            });
        });

        app.post("/api/notes/:categoryName", function (req, res) {
            var categoryName = req.params.categoryName;
            var noteToInsert = {
                note: "req.body.note",
                color: "req.body.color",
                author: "From API"
            };

            data.addNote(categoryName, noteToInsert, function (err) {

            });
        });

    } //End of Init

})(module.exports);