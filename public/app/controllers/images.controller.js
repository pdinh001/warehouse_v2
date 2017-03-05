(function(){
    var ImagesController = function(warehouseDataSVC) {
        var self = this;

        warehouseDataSVC.getImages().then(function(data){
            self.skuImages = data;
        });

        this.search = "";
        this.imageUrl = "http://res.cloudinary.com/pdinh001/image/upload/v1488696313/skuimage_fhrb82.jpg";

        this.getImage = function() {
            for (var i = 0; i < self.skuImages.length; i++) {
                if (self.skuImages[i].sku == this.search) {
                    this.imageUrl = self.skuImages[i].image_url;
                    this.search = "";
                    break;
                } else {
                    this.imageUrl = "http://res.cloudinary.com/pdinh001/image/upload/v1488696313/skuimage_fhrb82.jpg";
                }
            }
        };


    }

    warehouseApp.controller('ImagesController', ImagesController);
})();