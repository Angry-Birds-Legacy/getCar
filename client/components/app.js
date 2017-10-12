angular.module('get-car')

/* This is our 
                  _        _                        
                 | |      (_)                     
   ___ __ _ _ __ | |_ __ _ _ _ __ 
  / __/ _` | '_ \| __/ _` | | '_ \
 | (_| (_| | |_) | || (_| | | | | |
  \___\__,_| .__/ \__\__,_|_|_| |_|
           | |                                                  
           |_|                      .... 
*/
.component('app', {
	controller: function($scope, $http){
	// This part is a little triky ..
	// responsible of the show and hide in the app.html

		// these variables to show the different templates.	
		$scope.carId;
		$scope.rent;		//jwan
		$scope.showProfile;
		$scope.logIn;
		$scope.signUp;
		$scope.adde;
		$scope.addrental;
		$scope.about;
		$scope.feedback;
		$scope.edit = false
		// this one is from the server logged variable.
		// check line 65.
		this.loog = false;
		// this on is for the logged in user information ..
		// check line 66
		this.userInfo;
		this.rentUserInfo;

		$scope.showEdit = function () {		//jwan
			$scope.edit=true;
			$scope.rent = false;
			$scope.showProfile = false;
			$scope.logIn = false;
			$scope.signUp = false;
			$scope.about = false;
			$scope.adde = false;
			$scope.addrental=false;
			$scope.feedback = false;
		}



		$scope.rentt = function () {		//jwan
			$scope.rent = true;
			$scope.edit=false;
			$scope.showProfile = false;
			$scope.logIn = false;
			$scope.signUp = false;
			$scope.about = false;
			$scope.adde = false;
			$scope.addrental=false;
			$scope.feedback = false;
		}

		  $scope.pro = function () {		//haya
			$scope.showProfile = true;
			$scope.edit=false;
			$scope.rent = false;
			$scope.logIn = false;
			$scope.signUp = false;
			$scope.about = false;
			$scope.adde = false;
			$scope.addrental=false;
		}

		// This function is connected with the headbar 
		// and responsible of showing the log in template.
		$scope.change = function(){
			$scope.logIn = true;
			$scope.edit=false;
			$scope.showProfile = false;
			$scope.signUp = false
			$scope.about = false
			$scope.rent = false;	
			$scope.addrental=false;	//jwan
			$scope.feedback = false;
			$scope.adde = false;
		};
		
		// This function is connected with the headbar 
		// and responsible of showing the sign up template.
		$scope.changes = function(){
			$scope.signUp = true;
			$scope.edit=false;
			$scope.adde = false;			
			$scope.logIn = false
			$scope.about = false
			$scope.rent = false;
			$scope.showProfile = false;
			$scope.addrental=false;		//jwan
			$scope.feedback = false;
		}

		$scope.shabout = function(){
			$scope.about = true
			$scope.edit=false;
			$scope.signUp = false
			$scope.logIn = false
			$scope.showProfile = false;
			$scope.rent = false;		//jwan
			$scope.adde = false;			//jwan
			$scope.addrental = false;
			$scope.feedback = false;
		}

		$scope.showFeedback = function(){
			$scope.feedback = true;
			$scope.edit=false;
			$scope.about = false;
			$scope.signUp = false;
			$scope.logIn = false;
			$scope.rent = false;		//jwan
			$scope.adde = false;			//jwan
			$scope.addrental = false;
		}
		
		// This function is connected with the headbar 
		// and responsible of showing the add car template.
		$scope.addd = function(){
			$scope.adde = true
			$scope.edit=false;
			$scope.rent = false;
			$scope.showProfile = false;
			$scope.addrental = false;
			$scope.about = false;
			$scope.feedback = false;

		}
        // This function is connected with the headbar 
		// and responsible of showing the add rental car template.
        $scope.adddrental = function(){
			$scope.addrental = true
			$scope.edit=false;
			$scope.rent = false;
			$scope.showProfile = false;
			$scope.about = false
			$scope.signUp = false
			$scope.logIn = false		//jwan
			$scope.adde = false;			//jwan
			$scope.feedback = false;

		}
		// this variable to save the data comming from the server.
		this.searchTest = [];
		this.rentData = [];

		// This is the auto get request that brings the data from the server.
		$http.get('/data')
		.then(
			function(response){
			  // assigning the logged status to the loog variable.
			  $scope.$ctrl.loog = response.data[response.data.length - 2]
			  $scope.$ctrl.userInfo = response.data[response.data.length - 1]
			 
			  // saving the cars objects and removing the looged in status. 
			  for (var i=0; i<response.data.length - 2; i++){
			  	//console.log(response.data[i]);
				$scope.$ctrl.searchTest.push(response.data[i])
			  }
			  //console.log($scope.$ctrl.searchTest)
		}, 
		function(response){
			//console.log(response)
		});

		$http.get('/data/rent')
		.then(
			function(response){
			  // assigning the logged status to the loog variable.
			  $scope.$ctrl.loog = response.data[response.data.length - 2]
			  $scope.$ctrl.rentUserInfo = response.data[response.data.length - 1]

			  // saving the cars objects and removing the looged in status. 
			  for (var i=0; i<response.data.length - 2; i++){
				$scope.$ctrl.rentData.push(response.data[i])
			  }
			  //console.log($scope.$ctrl.rentData)
		}, 
		function(response){
			//console.log(response)
		});
	},

/* Take a rest, you earned it ...
       ______
      /     /\
     /     /  \
    /_____/----\_    (
   "     "          ).
  _ ___          o (:') o
 (@))_))        o ~/~~\~ o
                 o  o  o
*/

	templateUrl: `
	client/templates/app.html
	`
})