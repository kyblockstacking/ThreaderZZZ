const router = require('express').Router();
const db = require('../models');
//remember "/" is being used by express.static

router.get("/mainTopicDiscussion/:id", function (req, res) {
  db.Threads.find({
    where: {
      id: req.params.id
    },
    include: [{
      model: db.User,
      attributes: ['userName']
    }],
    order: [
      ['createdAt', 'DESC']
    ]
  }).then((results) => {
    res.json(results)
  })
})

router.get('/threadCount', function (req, res) {
  db.Category.findAll({
    include: [db.Threads],
  }).then((results) => {
    res.json(results);
  });
});

router.get('/api/:category', function (req, res) {
  db.Threads.findAll({
    include: [{
      model: db.Comments
    }, {
      model: db.User,
      attributes: ["userName"]
    }, {
      model: db.Category,
      attributes: ["name"]
    }],
    where: {
      CategoryId: req.params.category,
    },
    order: [
      ['createdAt', 'DESC']
    ]
    // include: [{
    //   model: db.User,
    //   required: false
    // }]
  }).then((results) => {
    res.json(results);
  });
});

router.get('/api/threads/:id', function (req, res) {
  db.Comments.findAll({
    where: {
      ThreadId: req.params.id
    },
    include: [{
      model: db.User,
      attributes: ['userName', 'upvote', 'downvote']
    }],
    order: [
      ['createdAt', 'DESC']
    ]
  }).then((results) => {
    res.json(results);
  });
});

router.post("/threads/api/threads/", function (req, res) {
  var threads = req.body;
  db.Threads.create(threads).then(function (result) {
    res.end();
  })
});

router.post("/comments/api/comments/", function (req, res) {
  var comments = req.body;
  db.Comments.create(comments).then(function (result) {
    res.end();
  });
});

router.post("/forumCategory", function (req, res) {
  db.Category.create(req.body)
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      res.json(err);
    })
})

module.exports = router;
