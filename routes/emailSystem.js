const router = require('express').Router();
const db = require('../models');

router.get("/emailin/:user", function (req, res) {
    db.Email.findAll({
        include: [{
            model: db.User,
            attributes: ['userName']
        }],
        where: {
            recipient: req.params.user
        }
    }).then(function (result) {
        res.json(result);
    })
});

router.get("/emailout/:user", function (req, res) {
    db.Email.findAll({
        where: {
            UserId: req.params.user
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