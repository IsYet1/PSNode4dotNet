console.log("Hello World");

var x = {
    name: "hello",
    birthplace: "world"
}

console.log(x.name + " " + x.birthplace);

var msgs =              require("./msgs.js");
var msgsFunc =          require("./msgsFunc.js");
var msgsConstructor =   require("./msgsConstructor.js");

console.log(msgs.first);
console.log(msgs.second);
console.log(msgs.third);

console.log(msgsFunc("Add this to the output"));

var msgsCtor = new msgsConstructor("Constructor did this");
console.log(msgsCtor.first);

