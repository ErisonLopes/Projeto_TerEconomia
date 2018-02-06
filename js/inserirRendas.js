angular.module('starter', [])

.controller('rendascontroller', function($scope, $http){
    $scope.dadosLogin = {};

    $scope.entrar = function (){
        $http.post('http://localhost:3000/api/login', $scope.dadosLogin).then(function(){            
            console.log("login ok!");
            window.location = 'index.html';
        })
    }
})