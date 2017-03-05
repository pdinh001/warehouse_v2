(function(){
    var WeightsController = function() {
        this.message = "Hello from Weights";

        this.weights_list = [
            {sku: "a3", weight: 2.3},
            {sku: "u3", weight: 6.5},
            {sku: "k2", weight: 4.7},
            {sku: "329", weight: 3.2},
            {sku: "191.1", weight: 8}
        ];
    }

    warehouseApp.controller('WeightsController', WeightsController);
})();