var express = require('express');
var router = express.Router();
var path = require('path');

// Main route of the application to test the HTTP API.
router.get('/', function(req, res, next) {
    res.status(200).sendFile('index.html');
});

router.get('/inscription', function(req, res) {
 res.status(200).sendFile(path.resolve('client/inscription.html'));
 });

// Export the router instance to make it available from other files.
module.exports = router;
