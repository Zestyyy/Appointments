console.log('server appointments controller is loaded');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Appointment = mongoose.model('Appointment');
var User = mongoose.model('User');

module.exports = {
    index: function(req, res){
        Appointment.find({}).populate('_user').exec(function(err, all_appointments){
            if(err){
                return res.json(err);
            }else{
                return res.json(all_appointments);
            }
        })
    },

    create: function(req, res){
        Appointment.create(req.body, function(err, appointment){
            if(err){
                console.log("Error in creating Appointment", err);
                return res.json(err);
            }else{
                User.findOne({_id: req.body._user}, function(err, user){
                    appointment._user = user._id;
                    appointment.save(function(err){
                        if(err){
                            console.log('Error in saving the appointment');
                            return res.json(err);
                        }else{
                            user.appointments.push(appointment);
                            user.save(function(err){
                                if(err){
                                    console.log('Error in saving the user');
                                    return res.json(err);
                                }else{
                                    console.log('Successfully pushed appointment to user and saved both schemas.');
                                    User.find({}).populate('appointments').exec(function(err, all_users){
                                        return res.json(all_users);
                                    })
                                }
                            })
                        }
                    })
                })
            }
        })
    },

    delete: function(req, res){
        Appointment.remove({_id: req.params.id}, function(err, app){
            if(err){
                return res.json(err);
            }else{
                console.log('success');
                return res.json("Successfully cancelled appointment")
            }
        })
    }
}
