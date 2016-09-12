﻿//database.js
(function (database) {

    var mongodb = require("mongodb");
    var mongoUrl = "mongodb://localhost:27017/theBoard";
    var theDb = null;

    database.getDb = function (next) {
        if (!theDb) {
            // Connect to the DB
            mongodb.MongoClient.connect(mongoUrl, function (err, db) {
                if (err) {
                    next(err, null);
                } else {
                    theDb = {
                        db: db
                    };
                    next(null, theDb);
                }
            });
        } else {
            next(null, theDb);
        }
    }

})(module.exports);