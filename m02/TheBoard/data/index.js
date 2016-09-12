(function (data) {

    var seedData = require("./seedData");
    var database = require("./database");

    //Async function. Will call next to tell the caller when it's done and if it was success or failure.
    data.getNoteCategories = function (next) {
        next(null, seedData.initialNotes);
    };

    function seedDatabase() {
        database.getDb(function (err, db) {
            if (err) {
                console.log("Faield to seed database: " + err);
            } else {
                db.notes.count(function (err, count) { //Count is a function on the collection. Call it async.
                    if (count == 0) { //Data not there yet. Seed it.
                        console.log("Seeding the database...");
                        seedData.initialNotes.forEach(function (item) {
                            db.notes.insert(item, function (err) {
                                if (err) console.log("Failed to insert note into database");
                            });
                        });
                    } else {
                        console.log("Database already seeded");
                    }
                });
            }
        });
    }

    seedDatabase();

})(module.exports);
