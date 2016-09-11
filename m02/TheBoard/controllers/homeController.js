(function (homeController) {
    homeController.init = function(app){
        app.get("/", function (req, res) {

            //res.send("<html><body><h1>" + "Express 1509" + "</h1></body></html>");
            //res.render("jade/index", { title: "Express + Jade", moreText: "With layout" });
            //res.render("ejs/index", { title: "Express + EJS", moreText: "With layout" });

            res.render("index", { title: "Express + Vash + Controller", moreText: "With layout" });

        });
    };

})(module.exports);
