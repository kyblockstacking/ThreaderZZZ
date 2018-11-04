const router = require('express').Router();
const db = require('../models');

router.get("/emailin", function (req, res) {
    db.Email.findAll({
        where: {
            recipient: req.body.userId
        }
    }).then(function (result) {
        res.send();
    })
});

router.post("/emailout", function (req, res) {
    var emails = req.body;
    db.Email.create(emails).then(function (result) {
        res.send();
    })
});

module.exports = router;