var db = require("../models");
var getCookie = function (cookie_name, req) {
    var name = cookie_name + "=";
    var ca = req.headers.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
module.exports = function(app){

    app.get("api/comments/", function( req, res) {
        var userId = getCookie("email", req)
        db.Comments.findAll({
            where : {
                userId: userId
            },
            order: [
                ["submitDate", "ASC"]
            ]
        }).then(function(dbComments) {
            res.json(dbComments);
        })
    });

    app.get("api/threads/", function( req, res) {
        var threadsID = getCookie("name", req)
            db.Threads.findAll({
                where : {
                    threadsID: threadsID
                }
            }).then(function(dbThreads) {
                res.json(dbThreads);
            })
    });

    app.post("/api/comments/", function(req, res) {
        var comments = req.body;
        db.Comments.create(comments).then(function(result) {
            res.end();
        });
    });
}