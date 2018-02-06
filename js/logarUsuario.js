
angular.module('starter', [])

.controller('logincontroller', function($scope, $http){
    $scope.dadosRendas = {};

    $scope.inserir = function (){
        $http.post('http://localhost:3000/api/rendas', $scope.dadosRendas).then(function(){            
            console.log("login ok!");
            window.location = 'index.html';
        })
    }
})