// Definition of the document type and basic operations on bankoperations.
var cozydb = require('cozydb');

var BankOperation = cozydb.getModel('BankOperation', {
    'bankAccount': {
        default: '',
        type: String,
    },
    'amount': {
        default: 0.0,
        type: Number,
    },
    'date': {
        default: null,
        type: Date,
    },
    'dateImport': {
        default: null,
        type: Date,
    },
    'operationTypeID': {
        default: '',
        type: String,
    },
    'raw': {
        default: '',
        type: String,
    },
    'title': {
        default: '',
        type: String,
    }
});


// Make this model available from other files.
module.exports = BankOperation;
