var moviePosterApp = angular.module('moviePosterApp', []);

moviePosterApp.controller('movieController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
  
	$scope.scrollToID = function(ID){
		$location.hash(ID);
		anchorScroll().yOffset = -100;;
	} 


}]);