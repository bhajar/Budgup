/*var assert = require('assert');
var request = require('request');
var expect = require('chai').expect;

describe('Fonction de Base', function() {

    var url = "http://localhost:9250/get_operations";
    var raw = "EDF";
    var montant = -300.05;
    var operations = [];
    var rawTrouve = false;
    var montantTrouve = false;

    it('Verifier l\'existance de l\'opération', function(done) {
        request(url, function(error, response, body) {
            operations = JSON.parse(body);

            for (var i = 0; i < operations.length; i++) {
                if (operations[i].raw == raw) {
                    rawTrouve = true;

                    if (operations[i].amount == montant) {
                        montantTrouve = true;
                    }
                }
            }
            expect(rawTrouve).to.be.true;
            expect(montantTrouve).to.be.true;
            done();
        });
    });

});*/