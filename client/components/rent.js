angular.module('get-car')

// this part is responsible of showing the cars ..

.component('rent', {
    bindings: {
	  item: "<"
	},
	controller: function(){
		console.log(this.items)
	},

	templateUrl: `
	client/templates/rent.html
	`
});
