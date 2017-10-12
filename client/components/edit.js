angular.module('get-car')

// Our treasure hunt ..
.component('edit', {

    bindings:{
        carId: "<"
    },
	controller: function ($scope, $http, $location){
      // uploading the image ..
      $scope.image = document.getElementById("image1").onchange = function(evt){
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
      console.log(carId)
      
    $scope.submitt = function(){
      //collect data from user in one obj
    $scope.carInfo = {id: $scope.$ctrl.carId, type : $scope.type , color : $scope.color , price : $scope.price , image : $scope.image.src};

      //send the car to the server
    $http.post("/profile/edit" , $scope.carInfo)
      .then(function(data){
        console.log('hi');
        $scope.edit = false;
        window.location = "/profile.html"
      }, function(data){
          console.log("ERROR !!")
        });

};

$scope.cancel = function(){
    $location = "/profile.html"
}

  
},
	templateUrl: `
    client/templates/edit.html
	`
});