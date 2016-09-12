/*
* @Author: jad
* @Date:   2016-09-10 13:46:15
* @Last Modified by:   jad
* @Last Modified time: 2016-09-12 10:06:09
*/

'use strict';

var controllers = angular.module('chalenjy.controllers', []);

controllers.controller("AppController", function($scope, $ionicSideMenuDelegate) {

	$scope.$root.showHeaderBtns = false;
	$ionicSideMenuDelegate.canDragContent(false);
})