(function (data) {

    var seedData = require("./seedData");

    //Async function. Will call next to tell the caller when it's done and if it was success or failure.
    data.getNoteCategories = function (next) {
        next(null, seedData.initialNodes);
    };
})(module.exports);
