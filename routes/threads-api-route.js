var db = require("../models");
const router = require('express').Router();
// var getCookie = function (cookie_name, req) {
//     var name = cookie_name + "=";
//     var ca = req.headers.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//       var c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   };
 
    //   router.get("/api/threads/", function(req, res) {
    //       var userId = getCookie("email",req)
    //       db.Threads.findAll({
    //           where : {
    //               userId: userId
    //           },
    //           order: [
    //               ["submitDate", "ASC"]
    //           ]
    //       })
    //   }).then(function(dbThreads) {
    //       res.json(dbThreads);
    //   });

    //   router.get("/api/threads/", function(req, res) {
    //       var threads = req.body;
    //       console.log(threads)
    //       db.Category.find({
    //           where: {
    //               threadName : threadName
    //           }
    //       });
    //   });

      router.post("/api/threads/", function(req, res) {
          console.log("hit")
          var threads = req.body;
          db.Threads.create(threads).then(function(result) {
              res.end();
          })
      });



module.exports = router;