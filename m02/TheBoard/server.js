﻿var http = require('http');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var ejsEngine = require("ejs-locals"); 

var controllers = require("./controllers");

var session = require("express-session");
var cookieParser = require("cookie-parser");
var flash = require("connect-flash");

//app.set("view engine", "jade");

//app.engine("ejs", ejsEngine);   //Add ejs master pages
//app.set("view engine", "ejs");  //Add ejs view engine

app.set("view engine", "vash");

//Opt into Express Services
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()); //Add this for the json parsing needed for API processing.

//Opt into connect-flash and session state
app.use(cookieParser());
app.use(session({ secret: "EncryptionKeyCanBeAnything" }));
app.use(flash());

// Set the public static resourc folder
app.use(express.static(__dirname + "/public"));

//Map the routes. Some change for grunt test.
controllers.init(app);


app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Don", isValid: true, group: "Admin" });
});

var server = http.createServer(app);

server.listen(3000);
console.log('Listening on 3000');
