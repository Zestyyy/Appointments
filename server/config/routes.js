var mongoose = require('mongoose');
var users = require('./../controllers/users.js'); // routes us to back-end controllers
var appointments = require('./../controllers/appointments.js'); // routes us to back-end controllers
var dates = require('./../controllers/dates.js'); // routes us to back-end controllers

module.exports = function(app){
    app.post('/login', users.show);
    app.post('/register', users.create);
    app.get('/users/:id', users.index);

    app.post('/date_check', dates.create);

    app.post('/add_appointment', appointments.create);
    app.get('/appointments', appointments.index);
    app.post('/cancel/:id', appointments.delete);
};
