process.env.NODE_ENV = 'test';

var bankoperation=require('../server/model/bankoperation');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
chai.use(chaiHttp);