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
    order: [
      ['createdAt', 'DESC']
    ]
  }).then((result) => {
    res.json(result);
  });
});

router.get('/emailout/:sender', (req, res) => {
  db.Email.findAll({
    where: {
      UserId: req.params.sender,
    },
    order: [
      ['createdAt', 'DESC']
    ]
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

router.put('/email/read/:id', (req, res) => {
  db.Email.update(
    { userRead: true },
    {
      where: {
        id: req.params.id,
      },
      order: [
        ['createdAt', 'DESC']
      ]
    },
  )
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
