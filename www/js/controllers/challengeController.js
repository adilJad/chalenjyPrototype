/*
* @Author: jad
* @Date:   2016-09-12 15:49:48
* @Last Modified by:   jad
* @Last Modified time: 2016-09-12 17:23:01
*/

'use strict';
controllers.controller("ChallengeController", function($scope, $stateParams, $ionicNavBarDelegate, $ionicModal) {
	console.log($stateParams.id);
	$ionicNavBarDelegate.showBackButton(true);

	$ionicModal.fromTemplateUrl('templates/challengers.html', {
		scope: $scope,
    	animation: 'slide-in-up'
	}).then(function(challengers) {
		$scope.challengers = challengers;
	});

	$scope.showChallengers = function() {
		$scope.challengers.show();
	}
	$scope.hideChallengers = function() {
		$scope.challengers.hide();
	}
})