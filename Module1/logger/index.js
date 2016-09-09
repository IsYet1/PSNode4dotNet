var file = require("./file");

module.exports.log = function (msg) {
    console.log(msg + " and the file name is: " + file.name);
}
