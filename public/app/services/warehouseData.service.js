(function(){
    warehouseApp.service('warehouseDataSVC', function($http){
        var self = this;

        self.getLocations = function() {
            return $http.get('/api/sku_locations').then(function(res){
                return res.data;
            });
        };

        self.getImages = function(){
            return $http.get('/api/sku_images').then(function(res){
                return res.data;
            });
        };

        self.getWeights = function(){

        };
    });
})();