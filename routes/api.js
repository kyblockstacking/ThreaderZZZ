const router = require('express').Router();
const db = require('../models');
//remember "/" is being used by express.static

router.get('/categories/:thread', function(req, res) {
  if (req.session.user) {
    //you can post and vote
  } else {
    //you cannot post and vote
  }
});

//signup route
router.post('/api/signup', function(req, res) {
  if (
    req.body.firstName.match(/./) &&
    req.body.lastName.match(/./) &&
    req.body.userName.match(/.{4,12}/) &&
    req.body.email.match(
      /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
    ) &&
    req.body.password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    )
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
                username: data.username,
                password: data.password,
                admin: data.admin,
              };
              res.json(data);
            })
            .catch((err) => {
              res.json(err);
            });
        } else {
          // we need to send a message to the user that username is taken
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

router.post('/logout', function(req, res) {
  res.clearCookie('token');
  req.session.destroy();

  res.redirect('/');
});

//hardcoded for Javascript threads
router.get('/api/threads', function(req, res) {
  db.Threads.findAll({
    // include: [db.Comments],
    where: {
      CategoryId: 1,
    },
  }).then((results) => {
    console.log(results);
    res.json(results);
  });
});

//dynamically coded for javascript thread replies
router.get('/api/threads/:id', function(req, res) {
  db.Comments.findAll({
    where: {
      ThreadId: req.params.id,
    },
  }).then((results) => {
    console.log(results);
    res.json(results);
  });
});

router.post('/login', (req, res) => {
  db.User.findOne({
    where: {
      userName: req.body.userName,
      password: req.body.password,
    },
  })
    .then((user) => {
      req.session.user = {
        firstName: user.firstName,
        username: user.userName,
        password: user.password,
        admin: user.admin,
        user: user.user,
        id: user.id,
      };
      const token = 't' + Math.random();
      db.User.update({ token: token }, { where: { id: user.id } }).then(
        (data) => {
          res.cookie('token', token, {
            expires: new Date(Date.now() + 999999999),
          });
          res.redirect('/');
        },
      );
    })
    .catch((err) => {
      res.send('username or password does not match');
    });
});

module.exports = router;
