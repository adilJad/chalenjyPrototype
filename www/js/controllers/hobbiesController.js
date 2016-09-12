/*
* @Author: jad
* @Date:   2016-09-10 19:10:10
* @Last Modified by:   jad
* @Last Modified time: 2016-09-12 09:57:24
*/

'use strict';

controllers.controller("HobbiesController", function($scope, $ionicSideMenuDelegate) {
	$ionicSideMenuDelegate.canDragContent(false);
	$scope.data = {
		arts: false,
		gastronomy: false,
		sports: false
	}

	$scope.showArts = function() {
		$scope.arts = !$scope.arts;
	}
})