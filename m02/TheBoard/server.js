var http = require('http');
var express = require("express");
var app = express();


var server = http.createServer(app);

app.get("/", function (req, res) {
    res.send("<html><body><h1>" + "Express" + "</h1></body></html>");
});

server.listen(3000);
console.log('Listening on 3000');
