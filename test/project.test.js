process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var models = require('../models');
models.sequelize.sync();

var ctrlProject = require('../controllers/project.ctrl');
var ctrlUser = require('../controllers/user.ctrl');
var should = chai.should();

chai.use(chaiHttp);

describe('Project controller', function () {


    it('should create a project', function (done) {

        ctrlUser.create("user", "mdp").then(function (user) {

            ctrlProject.create("project test", user).then(function (project) {
                project.title.should.equal('project test');
                project.should.have.property('updatedAt');
                project.should.have.property('createdAt');
                done();
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