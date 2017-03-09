var cozydb = require('cozydb');

module.exports = {
    bankoperation: {
        all: cozydb.defaultRequests.all,
        byOperationDate: cozydb.defaultRequests.by('date')
    }
};
