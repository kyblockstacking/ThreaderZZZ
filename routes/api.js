const router = require('express').Router();
const db = require('../models');
//remember "/" is being used by express.static

router.get('/categories/:thread', function (req, res) {
  if (req.session.user) {
    //you can post and vote
  } else {
    //you cannot post and vote
  }
});


//signup route
router.post('/api/signup', function (req, res) {
  if (
    req.body.firstName.match(/./) &&
    req.body.lastName.match(/./) &&
    req.body.userName.match(/.{4,12}/) &&
    req.body.email.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/) &&
    req.body.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
  ) {
    db.User.findOne({
      where: {
        userName: req.body.userName,
      },
    })
      .then((data) => {
        if (data === null) {
          //create login
          db.User.create(req.body)
            .then((data) => {
              //  *STILL NEEDED* redirect to where UI makes sense

              req.session.user = {
                username: data.dataValues.username,
                password: data.dataValues.password,
                admin: data.dataValues.admin,
              };
              res.json(data);
            })
            .catch((err) => {
              res.json(err);
            });
        } else {
          return res.status(400).json({
            status: 'error',
          });
        }
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    return res.status(400).json({
      status: 'error',
    });
  }
});

router.post('/logout', function (req, res) {
  res.clearCookie('token');
  req.session.destroy();

  res.redirect('/');
});


//routes for buttons (e.g. voting)
router.post("/api/upvote", function (req, res) {
  console.log("hi", req.body);
  db.Comments.update({
    upvotes: req.body.newUpVoteCount
  }, {
    where: {
      id: req.body.id
    }
  })
    .then(results => {
      console.log(results);
      res.status(200).json(results);
    })
});

router.post("/api/downvote", function (req, res) {
  console.log("buh", req.body);
  db.Comments.update({
    downvotes: req.body.newDownVoteCount
  }, {
    where: {
      id: req.body.id
    }
  })
    .then(results => {
      console.log(results);
      return res.status(200).json(results);
    })
})


//hardcoded for Javascript threads
router.get("/api/threads", function (req, res) {
  db.Threads.findAll({
    include: [db.Comments],
    where: {
      CategoryId: 1,
    }
  })
    .then(results => {
      console.log(results);
      res.json(results);
    });
});

router.get("/api/realthreads", function (req, res) {
  db.Category.findAll({
    include: [db.Threads]
  })
    .then(results => {
      console.log(results);
      res.json(results);
    });
});

//dynamically coded for javascript thread replies
router.get("/api/threads/:id", function (req, res) {
  req.session.user = {
    username: "lookrumad",
    password: "password",
    notUser: false,
    id: 1
  };

  if (req.session.user) {
    db.Comments.findAll({
      include: [{
        model: db.VoteAlready,
        where: {
          UserId: req.session.user.id
        },
        required: false
      }],
      where: {
        ThreadId: req.params.id
      }
    })
      .then(results => {
        results.push({
          notUser: req.session.user.notUser,
          userId: req.session.user.id
        })
        res.json(results);
      });
  }
});

module.exports = router;
