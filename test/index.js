var assert = require('assert');
var request = require('request');
var expect = require('chai').expect;

var port = 9250;
var url = "http://127.0.0.1:"+port;

function get_url(url) {
    return new Promise(function(resolve, reject) {
        request(url, function(error, response, body) {
            if (error) {
                resolve("Impossible de charger l'URL");
            }

            resolve('Opérationel');
        });
    });
}

describe('Teste des Algos', function() {
    describe('Algo de base', function() {
        it('GET /get_operations1', function() {
            return get_url(url+"/get_operations1").then(function(result) {
                expect(result).to.equal('Opérationel');
            });
        });
    });
    describe('Already Paid', function() {
        it('GET /get_operations2', function() {
            return get_url(url+"/get_operations2").then(function(result) {
                expect(result).to.equal('Opérationel');
            });
        });
    });
    describe('Min Max', function() {
        it('GET /get_operations', function() {
            return get_url(url+"/get_operations").then(function(result) {
                expect(result).to.equal('Opérationel');
            });
        });
    });
});