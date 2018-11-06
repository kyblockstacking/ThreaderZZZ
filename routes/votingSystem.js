const router = require('express').Router();
const db = require('../models');

//routes for buttons (e.g. voting)
router.put('/api/upvote', (req, res) => {
  db.Comments.update(
    {
      upvotes: req.body.newUpVoteCount,
    },
    {
      where: {
        id: req.body.id,
      },
    },
  )
    .then((results) => {
      res.status(200).json(results);
      db.User.update({
        upvote: req.body.upvote + 1
      }, {
        where: {
          id: req.body.userId
        }
      })
    })
    .catch((error) => {
      console.log(error);
    });
});

router.put('/api/downvote', (req, res) => {
  db.Comments.update(
    {
      downvotes: req.body.newDownVoteCount,
    },
    {
      where: {
        id: req.body.id,
      },
    },
  )
    .then((results) => {
      res.status(200).json(results);
      db.User.update({
        downvote: req.body.downvote + 1
      }, {
        where: {
          id: req.body.userId
        }
      })
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
