angular.module('get-car')

// this part is responsible of showing the cars ..

.component('rentshow', {
 bindings: {
    car: "<",
    userinfo:'<'
 },
 controller:function ($http,$scope){ 	
 	this.coment;
 	this.coments;
 	this.sendComent=function (){
 		console.log(this.userinfo[0]);
 		$.ajax({
           //async: false, 
           data:{
            id :this.car._id,
            coment:this.coment,
            username:this.userinfo[0]
           },
           url: "/coment",
           type:'POST',
           dataType: 'json',
           success: function(result){
             $scope.$ctrl.coments=result;
           }
      })

 	}
 	this.getComents=function (){
 		//console.log(this.car._id,this.car.username)
 		$.ajax({
           async: false, 
           data:{
            id :this.car._id
           },
           url: "/coments",
           type:'POST',
           dataType: 'json',
           success: function(result){
             $scope.$ctrl.coments=result;
             console.log($scope.$ctrl.coments)
           }
      })

 	}
 },

    templateUrl: `
    client/templates/rentshow.html
    `
});