app.controller('mainController', ['appointmentsFactory', '$scope', '$location', '$cookies', 'usersFactory', function(appointmentsFactory, $scope, $location, $cookies, usersFactory) {
    if($cookies.get('user_id') == undefined){ // prevents direct route navigation
        $location.url('/');
    }

    var user_id = $cookies.get('user_id');
    $scope.current_userID = user_id;

    $scope.getAppointments = function(){
        appointmentsFactory.index(function(returned_data){
            $scope.appointments = returned_data;
        })
    }

    $scope.getAppointments();

    usersFactory.index(user_id, function(returned_data){
        $scope.user = returned_data;
    });

    $scope.newAppointment = function(){
        $location.url('/new_appointment');
    }

    $scope.remove = function(app_userID, appID){
        if(app_userID == $scope.current_userID){
            appointmentsFactory.remove(appID, function(returned_data){
                alert(returned_data);
            })
        }else{
            alert("This isn't your appointment");
        }
        $scope.getAppointments();
    }
}]);
