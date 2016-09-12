/*
* @Author: jad
* @Date:   2016-09-10 19:28:05
* @Last Modified by:   jad
* @Last Modified time: 2016-09-12 22:34:57
*/

'use strict';

controllers.controller("HomeController", function($scope, $ionicModal, $ionicNavBarDelegate) {
	$scope.$on("$ionicView.beforeEnter", function() {
		$scope.$root.showHeaderBtns = true;
		$ionicNavBarDelegate.showBackButton(false);
		initialize();
	});

	$scope.data = {
		cityChallengesToggle: false,
		musicToggle: false,
		computerGraphicsToggle: false
	}

	$scope.data.cityChallenges = ["Imagine the best hair style", "Create a new bike design for your local bike shop", "Contribute to your local associations"];
	$scope.data.computerGraphics = ["Cartoonize my pet", "Draw me like one of your french girls"];
	$scope.data.music = ["Rock Bands Slam", "Epic Rap Battles"];

	function initialize() {
		/*console.log("called ", lat0, lng0);*/
		var pos = new google.maps.LatLng(48.8566, 2.3522);
		var mapOptions = {
			center: pos,
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: false,
			draggable: true,
			zoomControl: false,
			disableDoubleClickZoom: false,
			disableDefaultUI:true,
			scrollwheel: false
		};
		$scope.data.map = new google.maps.Map(document.getElementById("challengesMap"), mapOptions);

		var myMarker = new google.maps.Marker({
			position: pos,
			draggable: false,
			map: $scope.data.map
		});
	}

	//=================================== New Challenge Modal =====================================
	$ionicModal.fromTemplateUrl('templates/newChallenge.html', {
		scope: $scope,
    	animation: 'slide-in-up'
	}).then(function(newChallenge) {
		$scope.newChallenge = newChallenge;
	});

	$scope.openNewChallenge = function() {
		$scope.newChallenge.show();
	}
	$scope.closeNewChallenge = function() {
		$scope.newChallenge.hide();
	}

	
})