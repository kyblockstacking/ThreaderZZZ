const router = require('express').Router();
const db = require('../models');

router.get("/emailin/:user", function (req, res) {
    console.log("hi", req.body);
    db.Email.findAll({
        where: {
            recipient: req.params.user
        }
    }).then(function (result) {
        res.json(result);
    })
});

router.post("/emailout", function (req, res) {
    var emails = req.body;
    db.Email.create(emails).then(function (result) {
        res.send();
    })
});

module.exports = router;