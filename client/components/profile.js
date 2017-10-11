angular.module('get-car', ['ngRoute']) // haya
// this part is responsible of showing the cars ..

.component('showProfile', {

    controller: function($scope, $http, $routeProvider){
    $scope.dataa;
    $http.get('/profile').then(function(data){
        console.log(data.data)
        
        $scope.dataa = data.data

    });

    $scope.templates = [{
        name: 'edit.html',
        url: 'edit.html'
      }];

    $scope.edit = function(){
        $routeProvider.when()
    } 


    },

    templateUrl: `
    client/templates/profile.html
    `
});