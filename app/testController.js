
testApp.controller('TestController', function($scope){
	$scope.Name = "World";
	$scope.SayHello = function(name){
		alert('Hello ' + name );
	};
});
