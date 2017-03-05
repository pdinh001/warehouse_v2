(function () {
    warehouseApp.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/pages/main.html'
            })
            .when('/images', {
                templateUrl: 'app/views/pages/images.html',
                controller: 'ImagesController',
                controllerAs: 'images'
            })
            .when('/locations', {
                templateUrl: 'app/views/pages/locations.html',
                controller: 'LocationsController',
                controllerAs: 'locations'
            })
            .when('/weights', {
                templateUrl: 'app/views/pages/weights.html',
                controller: 'WeightsController',
                controllerAs: 'weights'
            })
            .otherwise({redirectTo: '/'});


        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });
    });
})();