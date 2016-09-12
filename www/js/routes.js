/*
* @Author: jad
* @Date:   2016-09-10 13:07:17
* @Last Modified by:   jad
* @Last Modified time: 2016-09-12 21:28:32
*/

'use strict';

chalenjy.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppController'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
      }
    }
  })
  .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html',
        controller: 'SignupController'
      }
    }
  })
  .state('app.hobbies', {
    url: '/hobbies',
    views: {
      'menuContent': {
        templateUrl: 'templates/hobbies.html',
        controller: 'HobbiesController'
      }
    }
  })
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      }
    }
  })
  .state('app.findFriends', {
    url: '/findFriends',
    views: {
      'menuContent': {
        templateUrl: 'templates/findFriends.html',
        controller: 'FindFriendsController'
      }
    }
  })
  .state('app.inviteFriends', {
    url: '/inviteFriends',
    views: {
      'menuContent': {
        templateUrl: 'templates/inviteFriends.html'
      }
    }
  })
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileController'
      }
    }
  })
  .state('app.challenge', {
    url: '/challenge/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/challenge.html',
        controller: 'ChallengeController'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});