var db = require("../models");

module.exports = function (app) {

   app.post("api/category/", function(req, res) {
        var category = req.body;
        db.Category.create(category).then(function(result) {
            res.end();
        });

   });
            }
    