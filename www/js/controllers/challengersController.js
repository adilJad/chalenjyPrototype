/*
* @Author: jad
* @Date:   2016-09-12 17:15:35
* @Last Modified by:   jad
* @Last Modified time: 2016-09-12 17:23:38
*/

'use strict';

controllers.controller("ChallengersController", function($scope) {
	$scope.challengersList = [
	{
		nickname: "indian guy",
		img: '../img/indian_guy.jpg'
	}, {
		nickname: "scarlett pretty",
		img: '../img/scarlett_pretty.jpg'
	}, {
		nickname: "know nothing",
		img: '../img/know_nothing.jpg'
	}, {
		nickname: "say what",
		img: '../img/say_what.jpg'
	}
	]
})