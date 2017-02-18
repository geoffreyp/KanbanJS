process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Status', function () {
    it('test home page status', function (done) {
        chai.request(server)
            .get('/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });

    it('test signup page status', function (done) {
        chai.request(server)
            .get('/signup')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});