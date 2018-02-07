angular.module('starter', [])


.controller('cadastrocontroller', function($scope, $http){
    $scope.dados = {};

    $scope.cadastrar = function (){        
        $http.post('http://localhost:3000/api/usuarios', $scope.dados).then(function(){
        console.log("cadastro ok!");
        window.location = 'login.html';
        })
        
    }
})
