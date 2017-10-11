angular.module('get-car')
.component('feedback',{

	controller : function ($scope, $http){

		$scope.addFeedback = function() {
			$scope.info = {
				name : $scope.name,
				email : $scope.email,
				subject : $scope.subject,
				message : $scope.message
			};

			$http.post("/contactus" , $scope.info)
		      .then(function(data){
		        $scope.feedback = false;
		        window.location = "../../index.html"
		      }, function(data){
		          console.log("ERROR !!")
		        });
		};
	},

	templateUrl : `client/templates/feedback.html`
});