(function (homeController) {

    var data = require("../data");

    homeController.init = function(app){
        app.get("/", function (req, res) {

            //res.send("<html><body><h1>" + "Express 1509" + "</h1></body></html>");
            //res.render("jade/index", { title: "Express + Jade", moreText: "With layout" });
            //res.render("ejs/index", { title: "Express + EJS", moreText: "With layout" });

            data.getNoteCategories(function (err, results) {
                res.render("index", {
                    title: "The Board",
                    moreText: "With layout",
                    error: err,
                    categories: results,
                    newCatError: req.flash("newCatName")
                });
            });


        });

        app.post("/newCategory", function (req, res) {
            var categoryName = req.body.categoryName; //Form data will be in the request body. req.body. Form encoded data.
            console.log(categoryName);
            data.createNewCategory(categoryName, function (err) {
                if (err) {
                    console.log(err);
                    req.flash("newCatName", err);
                    res.redirect("/");
                } else {
                    res.redirect("/notes/" + categoryName);
                }
            });
        });
    };

})(module.exports);
