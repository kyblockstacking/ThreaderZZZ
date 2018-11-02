const router = require('express').Router();
const db = require('../models');

//routes for buttons (e.g. voting)
router.post('/api/upvote', function(req, res) {
    console.log('hi', req.body);
    db.Comments.update(
      {
        upvotes: req.body.newUpVoteCount,
      },
      {
        where: {
          id: req.body.id,
        },
      },
    ).then((results) => {
      console.log(results);
      res.status(200).json(results);
    });
  });
  
  router.post('/api/downvote', function(req, res) {
    console.log('buh', req.body);
    db.Comments.update(
      {
        downvotes: req.body.newDownVoteCount,
      },
      {
        where: {
          id: req.body.id,
        },
      },
    ).then((results) => {
      console.log(results);
      return res.status(200).json(results);
    });
  });





module.exports = router;