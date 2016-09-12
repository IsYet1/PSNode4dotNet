(function (data) {

    var seedData = require("./seedData");
    var database = require("./database");

    //Async function. Will call next to tell the caller when it's done and if it was success or failure.
    data.getNoteCategories = function (next) {
        database.getDb(function (err, db) {
            if (err) {
                next (err, null); //Continue on with the async chain
            } else {
                db.notes.find({ name: "People" }).toArray(function (err, results) {
                    if (err) {
                        next(err, null);
                    } else {
                        console.log("Found notes results ok. Count: " + results.length);
                        next(null, results);
                    }
                });
            }
        });
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
