var http = require('http');
var express = require("express");
var app = express();
var ejsEngine = require("ejs-locals"); 

//app.set("view engine", "jade");

app.engine("ejs", ejsEngine);   //Add ejs master pages
app.set("view engine", "ejs");  //Add ejs view engine

app.get("/", function (req, res) {
    //res.send("<html><body><h1>" + "Express 1509" + "</h1></body></html>");
    //res.render("jade/index", { title: "Express + Jade", moreText: "With layout" });
    res.render("ejs/index", { title: "Express + EJS", moreText: "With layout" });

});

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Don", isValid: true, group: "Admin" });
});

var server = http.createServer(app);

server.listen(3000);
console.log('Listening on 3000');
