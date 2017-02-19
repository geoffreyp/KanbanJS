process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var models = require('../models');
models.sequelize.sync();

var ctrlProject = require('../controllers/project.ctrl');
var ctrlUser = require('../controllers/user.ctrl');
var ctrlPostit= require('../controllers/postit.ctrl');
var should = chai.should();

chai.use(chaiHttp);

describe('Project controller', function () {


    it('should create a project', function (done) {

        ctrlUser.create("user", "mdp").then(function (user) {

            ctrlProject.create("project test", user).then(function (project) {
                project.title.should.equal('project test');
                project.should.have.property('updatedAt');
                project.should.have.property('createdAt');
                return project;
            }).then(function (project) {
                ctrlPostit.create("postit1",user.id,"content postit","backlog",project.id).then(function (postit) {
                    postit.should.have.property('updatedAt');
                    postit.should.have.property('createdAt');
                    postit.title.should.equal('postit1');
                    postit.content.should.equal('content postit');
                    postit.type.should.equal('backlog');
                    done();
                });
            });

        });

    });


    beforeEach(function (done) {
        models.postit.destroy({where: {}});
        models.project.destroy({where: {}});
        models.user.destroy({where: {}});
        done();
    });


});