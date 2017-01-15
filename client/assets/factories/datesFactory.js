console.log('Dates Factory');

app.factory('datesFactory', ['$http', function($http) {
    var factory = {};

    factory.check = function(date, callback){
        $http.post('/date_check', date).then(function(returned_data){
            console.log(returned_data.data);
            callback(returned_data.data); // should return true or false
        })
    }

    return factory;
}])
