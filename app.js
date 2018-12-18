var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter','$timeout','$http', function($scope, $filter, $timeout, $http) {
    
    
    $scope.handle = '';
    
    $scope.lowerCaseHandle = function(){
          return $filter('lowercase')($scope.handle);
		};

	$scope.characters = 5;
	
	$scope.rules = [
		{rulename: "Must be 5 characters"},
		{rulename: "must not be used elsewhere"},
		{rulename: "must be cool"}
	];
	
	$scope.alertClick = function(){
		alert("clicked");
	}
	
	$http.get('/api')
	.success(function(result){
		$scope.rules = result;
	})
	.error(function(data, status){
	console.log(data)});
                                    
    $scope.newRule = '';
	
	$scope.addRule=function(){
		$http.post('/api', {newRule: $scope.newRule})
		.success(function(result){
			$scope.rules = result;
			$scope.newRule = '';
		})
		.error(function(data, status){
	console.log(data)})
	}
}]);
	