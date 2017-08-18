eqApp.controller('mainController', function($rootScope, $scope, $http) {
	$scope.userInput = "humberto";
	$scope.setUser = function(){
		$rootScope.uuid = $scope.userInput;
	}
});