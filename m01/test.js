console.log("Hello World");

var x = {
    name: "hello",
    birthplace: "world"
}

console.log(x.name + " " + x.birthplace);

var msgs =              require("./msgs.js");

console.log(msgs.first);
console.log(msgs.second);
console.log(msgs.third);

var msgsFunc =          require("./msgsFunc.js");
console.log(msgsFunc("Add this to the output"));

var msgsConstructor =   require("./msgsConstructor.js");
var msgsCtor = new msgsConstructor("Constructor did this");
console.log(msgsCtor.first);

var logger = require("./logger");
var loggerObj = new logger.log("Logger did this");
//console.log();

var tf = false;
var _ = require("underscore");
_.contains("test", tf);
