angular.module('starter', [])

.controller('rendascontroller', function($scope, $http){
    $scope.rendas = {};

    $scope.inserir = function (){
        $http.post('http://localhost:3000/api/rendas', $scope.rendas + $scope.idDoUsuario).then(function(){
            console.log("rendas ok!");
            alert("Rendas cadastradas");
        })
    }
})