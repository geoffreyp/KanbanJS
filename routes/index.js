var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
    if (req.session.isconnect === "connect") {

        models.user.findAll({where: {id: req.session.idUser}}).then(function (user) {
            user[0].getProjects().then(function (project) {

                if(project.length > 0){
                    models.postit.findAll({where: {projectId: req.session.idProject}}).then(function (postits) {
                        return postits;
                    }).then(function (postits) {
                        models.project.findAll().then(function (projects) {
                            console.log(projects);
                            res.render('index',{projects:projects, posts: postits});
                        });
                    });
                }else {
                    models.project.findAll().then(function (projects) {
                        res.render('no-project-detected',{projects:projects});
                    });
                }
            });
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
        userId: 1,
        type:"backlog",
        projectId:req.body.postit['project']
    });
    res.redirect('/');
});

router.get('/joinproject', function (req, res) {
    if (req.session.isconnect === "connect") {
        models.project.findAll().then(function (projects) {
            res.render('joinproject',{projects:projects});
        });
    } else {
        res.redirect('/');
    }
});

router.post('/joinproject', function (req, res) {
    models.user.findAll({where: {id: req.session.idUser}}).then(function (user) {

        models.project.findAll({where: {id: req.body.project}}).then(function (projects) {
            user[0].addProject(projects[0]);
        }).then(function () {
            res.redirect('/');
        });


    });
});


router.post('/loadproject', function (req, res) {
    req.session.idProject = req.body.selectproject;
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

router.post('/newproject', function (req, res) {
    models.project.create({
        title: req.body.project['name'],
        authorId: req.body.project['author']
    }).then(function (project) {
        models.user.findAll({where: {id: req.session.idUser}}).then(function (user) {
            user[0].addProject(project);
        });
    });
    res.redirect('/');
});


router.post('/connection', function (req, res) {
    models.user.findAll({where: {name: req.body.login, password: req.body.password}}).then(function (user) {
        if (user.length > 0) {
            req.session.isconnect = "connect";
            req.session.idUser = user[0].id;
            req.session.idProject = 0; // TODO : update this value
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
