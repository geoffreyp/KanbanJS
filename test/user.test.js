process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var models = require('../models');

var ctrl = require('../controllers/user.ctrl');
var should = chai.should();

chai.use(chaiHttp);

describe('User controller', function () {

    it('should create a user', function (done) {
        ctrl.create("user_test_un", "mdp").then(function (user) {
            user.name.should.equal('user_test_un');
            user.password.should.equal('mdp');
            user.should.have.property('updatedAt');
            user.should.have.property('createdAt');
            done();
        });
    });

    it('should delete a user', function (done) {
        ctrl.delete("user_test_un").then(function (users) {
            if (users > 0) {
                done();
            }
        });
    });

});