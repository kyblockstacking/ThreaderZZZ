const router = require('express').Router();
const db = require('../models');


router.post('/requestMentor', function (req, res) {
    //hardcode userId
    req.body.UserId = 1;
    db.RequestMentor.create(req.body).then(function (result) {
        res.send(200);
    })

});

router.get("/classes", (req, res) => {
    db.RequestMentor.findAll({
        include: [{
            model: db.User,
            attributes: ['userName']
        }]
    }).then((results) => {
        res.json(results)
    })
})

router.get("/mentorRequest/:id", (req, res) => {
    db.RequestMentor.find({
        where: {
            id: req.params.id
        },
        include: [{
            model: db.User,
            attributes: ['userName']
        }]
    }).then((results) => {
        res.json(results);
    })
})

module.exports = router;