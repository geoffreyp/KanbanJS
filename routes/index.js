var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
    if (req.session.isconnect === "connect") {
        models.postit.findAll({limit: 10}).then(function (postits) {
            console.log();
            res.render('index', {
                posts: postits
            })
        });
    } else {
        res.render('login');
    }
});


router.get('/signup', function (req, res) {
    res.render('signup');
});


router.post('/signup', function (req, res) {
    if (req.body.password1 === req.body.password2) {
        models.user.create({
            name: req.body.login,
            password: req.body.password1
        });
        res.redirect('/');
    } else {
        res.redirect('/signup');
    }
});


router.post('/newpostit', function (req, res) {
    models.postit.create({
        title: req.body.postit['title'],
        content: req.body.postit['content'],
        userId: 1
    });
    res.redirect('/');
});


router.get('/newproject', function (req, res) {
    if (req.session.isconnect === "connect") {
        models.user.findAll().then(function (users) {
            res.render('newproject',{users:users});
        });
    } else {
        res.redirect('/');
    }
});


router.post('/connection', function (req, res) {
    models.user.findAll({where: {name: req.body.login, password: req.body.password}}).then(function (user) {
        if (user.length > 0) {
            req.session.isconnect = "connect";
        } else {
            req.session.isconnect = "bad_login";
        }
    }).then(function () {
        res.redirect('/');
    });
});


router.post('/disconnection', function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    })
});

module.exports = router;
