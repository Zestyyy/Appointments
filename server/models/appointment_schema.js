console.log('Successfully loaded appointment schema');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appointmentSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    valid_date: { type: Date, required: [true, "Date of appointment is required/Invalid Date."]},
    valid_time: { type: Date, required: [true, "Time of appointment is required/Invalid Time."]},
    complain: {type: String, minlength: 10, required: [true, "Complain is required."]}

}, {timestamps: true} );

mongoose.model('Appointment', appointmentSchema);
