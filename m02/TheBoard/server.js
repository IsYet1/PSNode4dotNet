var http = require('http');
var express = require("express");
var app = express();


var server = http.createServer(app);

app.get("/", function (req, res) {
    res.send("<html><body><h1>" + "Express 1509" + "</h1></body></html>");
});

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Shawn", isValid: true, group: "Admin" });
});

server.listen(3000);
console.log('Listening on 3000');
