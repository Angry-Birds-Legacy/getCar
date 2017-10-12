angular.module('get-car')

// this part is responsible of showing the cars ..

.component('show', {
  bindings: {
	car: "<",
  userinfo:'<'
  },
  controller:function ($scope){
  this.coment;
  this.coments;
  this.sendComent=function (){
    console.log(this.userinfo);
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
	client/templates/show.html
	`
});

/*
          Seem to be or not seem to be....
                    \
                         ,,,,,,
                        /e   ''(
                       (_ `     \
                      ___>       \
                     / ,_\-.___   \_
                    /  _)/ /        \
                    |  \  /  ` _     |
                  __\____/    /    ' |
                 /  _        /______/
                / _/ \,_____/o     (
                \__)/`              \
                   /   \__________/_/_
                 _/     \  \   )/     \
                /      /   |  /\      (
                \_____/ ___/  \ \  _/  \
           ______/_/___|_|     ) \     /
          /       o\     o\   /  /    /\
       ,,,'-----^--',,,,,,',,|_,,\_ ,,\/,,
*/