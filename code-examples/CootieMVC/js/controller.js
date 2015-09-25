var app = angular.module('cootieCatcherApp',[]);

app.controller('cootieCtrl', function($scope){
	$scope.me = 'Rhazes';

	$scope.responses = [ [	{ choice: 'red',
							  choiceNumber: 0 },
							{ choice: 'yellow',
							  choiceNumber: 1 },
							{ choice: 'green',
							  choiceNumber: 2 },
							{ choice: 'cyan',
							  choiceNumber: 3}]];
						
//						[2,4,6,8],
//						[3,5,7,9]];					
	//$scope.questions =
	$scope.questionNumber = 0;
	//
	$scope.currentSelection = 0;
	$scope.currentChoices = $scope.responses[0];
	$scope.count = -1;

	$scope.inc = function(amt) {
		$scope.count = $scope.count + amt;
		angular.element('#cyan').toggle();
	}
	

});