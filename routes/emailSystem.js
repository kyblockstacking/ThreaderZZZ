const router = require('express').Router();
const db = require('../models');

router.post("/emailout", function(req, res) {
    console.log("hit here")
    var emails = req.body;
    db.Email.create(emails).then(function(result) {
      res.send();
    })
   })

module.exports = router;