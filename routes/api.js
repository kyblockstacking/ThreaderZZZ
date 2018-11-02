const router = require('express').Router();
const db = require('../models');
//remember "/" is being used by express.static

router.get('/threadCount', function(req, res) {
  console.log("KEVINKEVIN")
  db.Category.findAll({
    include: [db.Threads],
  }).then((results) => {
    res.json(results);
  });
});

router.get('/api/:category', function(req, res) {
  db.Threads.findAll({
    include: [db.Comments],
    where: {
      CategoryId: req.params.category,
    },
  }).then((results) => {
    console.log(results);
    res.json(results);
  });
});

router.get('/api/threads/:id', function(req, res) {
  db.Comments.findAll({
    where: {
      ThreadId: req.params.id
    },
    // include: [db.User]
  }).then((results) => {
    console.log(results);
    res.json(results);
  });
});

router.get('/categories/:thread', function(req, res) {
  if (req.session.user) {
    //you can post and vote
  } else {
    //you cannot post and vote
  }
});

router.post("/threads/api/threads/", function(req, res) {
  var threads = req.body;
  db.Threads.create(threads).then(function (result) {
    res.end();
  })
});

router.post("/comments/api/comments/", function(req, res) {
  var comments = req.body;
  db.Comments.create(comments).then(function (result) {
    res.end();
  });
});

module.exports = router;
