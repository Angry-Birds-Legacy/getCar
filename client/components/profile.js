angular.module('get-car') // haya
// this part is responsible of showing the cars ..

.component('showProfile', {

    controller: function($scope, $http){
    $scope.dataa;
    
    $http.get('/profile').then(function(data){
        console.log(data.data)
        
        $scope.dataa = data.data

    });
    $scope.edit = function(car){
        console.log(car)
        console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
        $scope.$parent.carId = car._id   
        console.log( $scope.$parent.carId) 
        $scope.$parent.showEdit();
           
    }

    $scope.removee = function(){
        $http.delete('/remove', $scope.dataa._id).then(function(data){
            console.log(data);
        }, function(err){
            throw err;
        })
    }
},


    

    templateUrl: `
    client/templates/profile.html
    `
    });