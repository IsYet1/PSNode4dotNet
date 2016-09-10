var http = require('http');
var express = require("express");
var app = express();

app.set("view engine", "jade");

app.get("/", function (req, res) {
    //res.send("<html><body><h1>" + "Express 1509" + "</h1></body></html>");
    res.render("jade/index", { title: "Express + Jade" });
});

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Don", isValid: true, group: "Admin" });
});

var server = http.createServer(app);

server.listen(3000);
console.log('Listening on 3000');
