(function(){
    var MainController = function() {
        this.message = "This is main";
        this.tab = 0;

        this.selectTab = function(tab) {
            this.tab = tab;
        };
    }

    warehouseApp.controller('MainController', MainController);
})();