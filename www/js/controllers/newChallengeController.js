/*
* @Author: jad
* @Date:   2016-09-12 15:06:15
* @Last Modified by:   jad
* @Last Modified time: 2016-09-12 22:40:19
*/

'use strict';

controllers.controller("NewChallengeController", function($scope) {

	$scope.$on('modal.shown', function() {
	  	console.log('Modal is shown!');
		initialize();
	});
	
	function initialize() {	

		var options = {
			componentRestrictions: { country: 'fr' }
		};
		var search = document.getElementById('locationInput');
		var autocomplete = new google.maps.places.Autocomplete(search, options);
		
		google.maps.event.addListener(autocomplete, 'place_changed', function() {
			console.log(autocomplete.getPlace());
		});
	}

	$scope.disableTap = function(){
	    var container = document.getElementsByClassName('pac-container');
	    angular.element(container).attr('data-tap-disabled', 'true');
	    angular.element(container).on("click", function(){
	        document.getElementById('your_input_id').blur();
	    });
  	};
})