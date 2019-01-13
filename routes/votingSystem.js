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
  console.log('newnew', req.body)
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

router.put('/checkvote', (req, res) => {
  db.VoteAlready.findOne({
    where: {
      CommentId: req.body.commentId,
      UserId: req.body.userId
    }
  })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.post('/createvote', (req, res) => {
  db.VoteAlready.create({
    upvoteBtn: true,
    neutralBtns: false,
    downvoteBtns: false,
    CommentId: req.body.commentId,
    UserId: req.body.userId
  })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.post('/createvote2', (req, res) => {
  db.VoteAlready.create({
    upvoteBtn: false,
    neutralBtns: false,
    downvoteBtns: true,
    CommentId: req.body.commentId,
    UserId: req.body.userId
  })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});


router.put('/neutralizevote', (req, res) => {
  db.VoteAlready.update({
    upvoteBtn: false,
    neutralBtns: true,
    downvoteBtns: false
  },
  {
    where: {
      CommentId: req.body.commentId,
      UserId: req.body.userId
    }
  })
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.json(error);
  });
});

router.put('/increasevote', (req, res) => {
  db.VoteAlready.update({
    upvoteBtn: true,
    neutralBtns: false,
    downvoteBtns: false
  },
  {
    where: {
      CommentId: req.body.commentId,
      UserId: req.body.userId
    }
  })
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.json(error);
  });
});

router.put('/decreasevote', (req, res) => {
  db.VoteAlready.update({
    upvoteBtn: false,
    neutralBtns: false,
    downvoteBtns: true
  },
  {
    where: {
      CommentId: req.body.commentId,
      UserId: req.body.userId
    }
  })
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.json(error);
  });
});

module.exports = router;
