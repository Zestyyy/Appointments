console.log('server dates controller is loaded');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Appointment = mongoose.model('Appointment');
var d = mongoose.model('Date');

module.exports = {
    create: function(req, res){
        console.log(req.body);
        d.create(req.body, function(err, date){
            d.find({month: req.body.month, day: req.body.day}, function(err, result){
                if(result.length < 3){
                    console.log('available');
                    return res.json(true);
                }else{
                    console.log('unavailable');
                    return res.json(false);
                }
            })
        });
        // var count = 0;
        // for(var i=0; i<d.datesTaken.length; i++){
        //     if(d.datesTaken[i] === req.body){
        //         count++;
        //     }
        // }
        // if(count < 3){
        //     d.datesTaken.push(req.body);
        //     console.log('date is available');
        //     return true;
        // }else{
        //     console.log('date full/unavailable');
        //     return false;
        // }
    }
}
