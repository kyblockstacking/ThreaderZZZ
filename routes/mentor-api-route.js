var db = require("../models");

module.exports = function (app) {

   app.post("api/mentor/", function(req, res) {
        var mentor = req.body;
        db.Mentor.create(mentor).then(function(result) {
            res.end();
        });

   });
            }
    