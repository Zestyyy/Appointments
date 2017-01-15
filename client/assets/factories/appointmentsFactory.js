console.log('Appointments Factory');

app.factory('appointmentsFactory', ['$http', function($http) {
    var factory = {};

    factory.index = function(callback){
        $http.get('/appointments').then(function(returned_data){
            callback(returned_data.data);
        })
    }

    factory.add = function(appointment, callback){
        $http.post('/add_appointment', appointment).then(function(returned_data){
            callback(returned_data.data);
        })
    }

    factory.remove = function(appID, callback){
        $http.post(`/cancel/${appID}`).then(function(returned_data){
            callback(returned_data.data);
        })
    }
    return factory;
}])
