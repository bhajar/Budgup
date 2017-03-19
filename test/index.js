/*var assert = require('assert');
var request = require('request');
var expect = require('chai').expect;
var fs = require('fs');
var server = require('../server');

var port = 9250;
var url = "http://127.0.0.1:"+port;

function upload() {
    return new Promise(function(resolve, reject) {
        var formData = {
            file: fs.createReadStream(__dirname + '/data.json')
        };
        request.post({ url: url+'/upload', formData: formData}, function(err, httpResponse, body) {
            if (err) {
                resolve("Impossible d'uploader le fichier json.");
            }
            resolve("Opérationel");
        });
    });
}

function check_operation(url, raw) {
    return new Promise(function(resolve, reject) {
        request(url, function(error, response, body) {
            if (error) {
                resolve(false);
            }

            try {
                var operation_found = false;
                var operations = JSON.parse(body);
                for (var i = 0; i < operations.length; i++) {
                    if (operations[i].raw == raw) {
                        operation_found = true;
                        break;
                    }
                }
                resolve(operation_found);

            } catch(err) {
                resolve(false);
            }
        });
    });
}

new Promise(function(resolve) {
    describe('Upload', function() {
        this.timeout(10000);
        it('POST /upload', function() {
            return upload().then(function(result) {
                expect(result).to.equal('Opérationel');
                resolve();
            });
        });
    });
}).then(function() {
    describe('Test des Algos', function() {
        describe('Algo de base', function() {
            it('GET /get_operations1', function() {
                return check_operation(url+"/get_operations1", "operation 10").then(function(result) {
                    expect(result).to.equal(true);
                });
            });
        });
        describe('Already Paid', function() {
            it('GET /get_operations2', function() {
                return check_operation(url+"/get_operations2", "EDF").then(function(result) {
                    expect(result).to.equal(true);
                });
            });
        });
        describe('Min Max', function() {
            it('GET /get_operations', function() {
                return check_operation(url+"/get_operations", "EDF").then(function(result) {
                    expect(result).to.equal(true);
                });
            });
        });
    });
});*/
