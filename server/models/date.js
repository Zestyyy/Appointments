console.log('Successfully loaded date schema');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dateSchema = new mongoose.Schema({
    month: {type: Number},
    day: {type: Number},

}, {timestamps: true} );

mongoose.model('Date', dateSchema);
