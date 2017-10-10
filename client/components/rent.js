angular.module('get-car')

// this part is responsible of showing the cars ..

.component('rent', {
    bindings: {
	   rentCar: "<"
    },
      controller: function($scope, $http){
    // Our custom price filter
    $scope.rangeMinRent = 0;
    $scope.rangeMaxRent = 800;

    // the custom filter function ..
    $scope.filterRange = function(obj) {
      return obj.price > $scope.rangeMinRent && obj.price <= $scope.rangeMaxRent;
    };

    // choosing all of them ..
    $scope.allRent = function(){
      $scope.rangeMinRent = 0;
      $scope.rangeMaxRent = 800;
    };

    // chosing the minimum range ..
    $scope.minRent = function(){
      $scope.rangeMinRent = 0;
      $scope.rangeMaxRent = 50;
    };

    // chosing the middle range .. 
    $scope.midRent = function(){
      $scope.rangeMinRent = 50;
      $scope.rangeMaxRent = 200;
    };

    // choosing the highest range ..
    $scope.maxRent = function(){
      $scope.rangeMinRent = 200;
      $scope.rangeMaxRent = 800;
    };
	},

	templateUrl: `
	client/templates/rent.html
	`
});
