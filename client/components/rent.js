angular.module('get-car')

// this part is responsible of showing the cars ..

.component('rent', {
    bindings: {
	  item: "<"
    },

	templateUrl: `
	client/templates/rent.html
	`
});
