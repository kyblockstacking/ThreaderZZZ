const router = require('express').Router();
const db = require('../models');

router.get("/classes", (req, res) => {
    db.RequestMentor.findAll({
        include: [{
            model: db.User,
            attributes: ['userName']
        }],
        order: [
            ['createdAt', 'DESC']
        ]
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

router.get("/mentorBoxes/:id", (req, res) => {
    db.MentorCandidate.findAll({
        where: {
            RequestMentorId: req.params.id
        },
        order: [
            ['createdAt', 'DESC']
        ],
        include: [{
            model: db.User,
            attributes: ['userName']
        }]
    }).then(results => {
        res.json(results)
    })
})

router.post("/mentorCandidate/:id", (req, res) => {
    db.MentorCandidate.create(req.body)
        .then(() => {
            res.send(200);
        })
});

router.post('/requestMentor', function (req, res) {
    db.RequestMentor.create(req.body).then(function (result) {
        res.send(200);
    })

});

router.post('/acceptMentor/:id', function (req, res) {

    let numLetters = "0123456789abcdefghijklmnopqrstuvwxyz";

    function chatroomUrl() {
        let url = "https://threaderzzz.herokuapp.com/mentors/chatrooms/";
        let stringLength = 30;
        for (let i = 0; i < stringLength; i++) {
            let randNum = Math.floor(Math.random() * numLetters.length);
            url += numLetters[randNum]
        }

        return url

    }

    let chatRoom = (chatroomUrl());

    let email1 = {
        UserId: 6, 
        recipient: req.body.mentorName,
        title: "You have an appointment",
        message: `Your appointment with ${req.body.menteeName} is at ${req.body.aptTime}. Follow link to chatroom: ${chatRoom}`

    };
    let email2 = {
        UserId: 6,
        recipient: req.body.menteeName, 
        title: "You have an appointment!",
        message: `Your appointment with ${req.body.mentorName} is at ${req.body.aptTime}. Follow link to chatroom: ${chatRoom}`
    };


    db.MentorCandidate.update({
        accepted: true
            }, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.send(200);
        }).then(() => {
            db.Email.create(email1).then(() => {
                db.Email.create(email2).then(() => {
                })
            })
        })
})
module.exports = router;