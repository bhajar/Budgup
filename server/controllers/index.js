var express = require('express');
var router = express.Router();

// Hello world!
router.get('/hello-world', function(req, res) {
    res.status(200).send('Welcome to Budgup!');
});

// Main route of the application to test the HTTP API.
router.get('/', function(req, res) {
    res.status(200).sendFile('index.html');
});

// Export the router instance to make it available from other files.
module.exports = router;
