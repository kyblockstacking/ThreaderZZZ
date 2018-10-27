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
 
  module.exports = function(app) {
      app.get("/api/threads/", function(req, res) {
          var userId = getCookie("email",req)
          db.Threads.findAll({
              where : {
                  userId: userId
              },
              order: [
                  ["submitDate", "ASC"]
              ]
          })
      }).then(function(dbThreads) {
          res.json(dbThreads);
      });

      app.get("/api/threads/", function(req, res) {
          var threads = req.body;
          console.log(threads)
          db.Category.find({
              where: {
                  threadName : threadName
              }
          });
      });

      app.post("/api/threads/", function(req, res) {
          var threads = req.body;
          db.Threads.create(threads).then(function(result) {
              res.end();
          })
      })
  };