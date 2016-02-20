// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function(){
    var app = angular.module('starter', ['ionic']);
    
    
    app.config(function($stateProvider, $urlRouterProvider){
       $stateProvider.state('logging', {
            'url': '/logging',
            'controller': 'Logging',
            'templateUrl': 'templates/logging.html'
       });
    
        $stateProvider.state('opcion', {
             'url': '/opcion',
             'controller': 'AMenu',
             'templateUrl': 'templates/opcion.html'
        });
        
        $stateProvider.state('menudia', {
              'url': '/menudia',
              'templateUrl': 'templates/menudia.html'
        });
        
       $urlRouterProvider.otherwise('/logging')
        
    });
    
    app.controller('Storage', function($scope, $localstorage){
        $localstorage.setObject('storage', {
            receta: [],
            receta_ingrediente: [],
            ingrediente: [],
            pedido_receta: [],
            pedido: [],
            cliente: [{nombre}]
        });
    });
    
    app.controller('AMenu', function($scope, $state){
       $scope.ir = function(){
           $state.go('menudia'); 
       }
    });
    
    app.controller('Logging', function($scope, $state){
       $scope.ir = function(){
           $state.go('opcion');
       } 
    });

    app.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
                if(window.cordova && window.cordova.plugins.Keyboard) {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                    // Don't remove this line unless you know what you are doing. It stops the viewport
                    // from snapping when text inputs are focused. Ionic handles this internally for
                    // a much nicer keyboard experience.
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                
                if(window.StatusBar) {
                    StatusBar.styleDefault();
                }
        });
    })
}());