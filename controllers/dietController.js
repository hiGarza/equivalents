eqApp.controller('dietController', function($rootScope, $scope, $routeParams, $http) {
    $scope.activeMeal=0;
    $scope.mealList=[
    	{"name":"Desayuno", "type":"breakfast"},
    	{"name":"Primera Colacion", "type":"collation1"},
    	{"name":"Comida", "type":"breakfast"},
    	{"name":"Segunda Colacion", "type":"collation2"},
    	{"name":"Cena", "type":"dinner"}];

    $scope.selectMeal = function(i){
    	if(i!==$scope.activeMeal){
    		$scope.activeMeal=i;
    		fetchEquivalents();
    	}
    };

    function fetchEquivalents(){
    	$scope.equivalentList = {};
    	$http.get("https://3c3709p5x6.execute-api.us-west-1.amazonaws.com/production/equivalents/"+$rootScope.uuid+"/"+$scope.mealList[$scope.activeMeal]["type"])
    	.then(function(response){
    		$scope.equivalentList = response.data["Item"];
    		delete $scope.equivalentList["userID"];
    		delete $scope.equivalentList["meal"];
    	}, function(error){console.log(error)});
    }

    $scope.saveEquivalents = function(){
    	$http.post("https://3c3709p5x6.execute-api.us-west-1.amazonaws.com/production/equivalents/"+$rootScope.uuid+"/"+$scope.mealList[$scope.activeMeal]["type"], $scope.equivalentList)
    	.then(function(response){
        	$scope.activeMeal+=1;
        	fetchEquivalents();
      	}, function(error){console.log(error)});
    };

    fetchEquivalents();
});