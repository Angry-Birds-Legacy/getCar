angular.module('get-car')

// Our treasure hunt ..
.component('addrental', {

  bindings: {
   userin: '<'
  },
	controller: function ($scope, $http){
      // uploading the image ..
      $scope.image = document.getElementById("image").onchange = function(evt){
        var tgt = evt.target || window.event.srcElement,
        files = tgt.files;
        if(FileReader && files && files.length){
          var fr = new FileReader();
          fr.onload = function(){
                $scope.image.src =  fr.result;
          };
          fr.readAsDataURL(files[0]);

        }
      };
      
    $scope.add = function(){
      //collect data from user in one obj
    $scope.car = {type : $scope.type , color : $scope.color , price : $scope.rentalPrice , image : $scope.image.src, username: $scope.$ctrl.userin[0], phone: $scope.$ctrl.userin[1],pickupPlace:$scope.pickupPlace,returnPlace:$scope.returnPlace};

    if($scope.car.type !== undefined && $scope.car.color !== undefined  && $scope.car.rentalPrice !== undefined && $scope.car.image !== undefined && $scope.car.pickupPlace && $scope.car.returnPlace){
      //send the car to the server
    $http.post("/addtorent" , $scope.car)
      .then(function(data){
        $scope.addrental = false;
        window.location = "../../index.html"
      }, function(data){
          console.log("ERROR !!")
        });
  };
};
  
},
	templateUrl: `
    client/templates/addrental.html
	`
});