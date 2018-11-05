const router = require('express').Router();
const db = require('../models');

router.get('/emailin/:recipient', (req, res) => {
  db.Email.findAll({
    include: [
      {
        model: db.User,
        attributes: ['userName'],
      },
    ],
    where: {
      recipient: req.params.recipient,
    },
  }).then((result) => {
    res.json(result);
  });
});

router.get('/emailout/:sender', (req, res) => {
  db.Email.findAll({
    where: {
      UserId: req.params.sender,
    },
  }).then((result) => {
    res.json(result);
  });
});

router.post('/emailout', (req, res) => {
  const email = req.body;
  db.Email.create(email)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
