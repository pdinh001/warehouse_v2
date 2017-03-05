(function(){
    var LocationsController = function($http, warehouseDataSVC) {
        this.search = "";
        this.page = 0;
        this.nextPage = function() {
            this.page += 10;
        };

        this.prevPage = function() {
            if (this.page != 0) {
                this.page -= 10;
            }
        };
        var self = this;

        warehouseDataSVC.getLocations().then(function(data){
            self.skuLocations = data;
        });

    }

    warehouseApp.controller('LocationsController', LocationsController);
})();