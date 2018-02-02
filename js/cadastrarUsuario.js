

angular.module('starter.controllers', [])

.controller('cadastrocontroller', function($scope, $state, $http){
    $scope.dados = {};

    $scope.logar = function (){
        $http.post('http://localhost:3000/cadastro', $scope.dados).then(function(){
            console.log("cadastro ok!");

            $scope.irCadastro = function(){
            $state.go('app.index');

            }})
    }
})
