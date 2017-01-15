app.controller('appointmentController', ['appointmentsFactory', 'datesFactory', '$scope', '$location', '$cookies', function(appointmentsFactory, datesFactory, $scope, $location, $cookies) {
    if($cookies.get('user_id') == undefined){ // prevents direct route navigation
        $location.url('/');
    }

    $scope.appointment = {};
    $scope.date = {};
    $scope.user_id = $cookies.get('user_id');

    var today=new Date();
    $scope.today = today.toISOString().substring(0,10);
    // console.log($scope.today);

    $scope.add_appointment = function(){
        var month = $scope.appointment.valid_date.getUTCMonth() + 1; //months from 1-12
        var day = $scope.appointment.valid_date.getUTCDate();
        $scope.date.month = month;
        $scope.date.day = day;

        datesFactory.check($scope.date, function(returned_data){
            if(returned_data === true){
                $scope.appointment._user = $scope.user_id;
                appointmentsFactory.add($scope.appointment, function(returned_data){
                    console.log('success!', returned_data);
                    if('errors' in returned_data){
                        $scope.errors = returda.errors;
                    }else{
                        alert('Successfully added an appointment!');
                        $location.url('/main');
                    }
                })
            }
        })

    }
}]);
