"use strict";

pastaClockApp.controller('homeController',function($scope) {
});

pastaClockApp.controller('pastaController', function($scope, $routeParams, $timeout) {
    $scope.pasta = $routeParams.pasta;
    $scope.Math = window.Math;
    $scope.showIcon = false;
    var counter;

    var time = {
        spaghettis: 8*60+30,
        penne: 5*60,
        //maccheroni: 1*60+15,
        maccheroni: 15,
        rigatoni: 7*60,
        fusilli: 5*60,
        farfalle: 6*60
    };

    $scope.time = time[$scope.pasta];

    $scope.countDown = function(){
        counter = $timeout($scope.countDown,1000);
        $scope.time--;
        if($scope.time === 0) {
            $timeout.cancel(counter);
            $scope.showIcon = true;
        }
    };
    //var counter = $timeout(countDown,1000);
});

//pastaClockApp.controller('countdownController', function($scope, $timeout) {
    //var countDown = function(){
        //$scope.time--;
        //counter = $timeout(countDown,1000);
        //if($scope.time === 0) {
            //$timeout.cancel(counter);
        //}
    //}
    //var counter = $timeout(countDown,1000);
//});

pastaClockApp.controller('clockController', function($scope, $routeParams) {
    $scope.time = $routeParams.time;
});
