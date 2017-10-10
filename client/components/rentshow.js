angular.module('get-car')

// this part is responsible of showing the cars ..

.component('rentshow', {
 bindings: {
    car: "<"
 },

    templateUrl: `
    client/templates/rentshow.html
    `
});