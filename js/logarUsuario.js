angular.module('starter', [])

.controller('logincontroller', function($scope, $http){
    $scope.dados = {};

    $scope.entrar = function (){    
            
        $http.post('http://localhost:3000/api/login', $scope.dados).then(function(){  
            $scope.idDoUsuario = dados._id;          
            console.log("login ok!");
            window.location = 'index.html';
        })
    
    }
})