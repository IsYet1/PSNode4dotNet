(function (data) {

    var seedData = require("./seedData");
    var database = require("./database");

    //Async function. Will call next to tell the caller when it's done and if it was success or failure.
    data.getNoteCategories = function (next) {
        database.getDb(function (err, db) {
            var findObj = { name: "History" };
            findObj = { notes: { $size: 5 } };
            findObj = { name: "People" };
            findObj = { notes: { $not: { $size: 3 } } };
            findObj = {};
            if (err) {
                next(err, null); //Continue on with the async chain
            } else {
                db.notes.find(findObj).sort({ name: 1 }).toArray(function (err, results) {
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

    data.createNewCategory = function (categoryName, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                db.notes.find({ name: categoryName }).count(function (err, count) {
                    if (err) {
                        next(err);
                    } else {
                        if (count != 0) {
                            next("Category already exists");
                        } else {
                            var cat = {
                                name: categoryName,
                                notes: [] // Need to add this empty array so that any count functions will work
                            };
                            db.notes.insert(cat, function (err) {
                                if (err) {
                                    next(err);
                                } else {
                                    next(null);
                                }
                            });
                        }
                    }
                });
            }
        });
        
    }

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
