(function () {
    function DHController(ApiService) {
        var ctrl = this;
        ctrl. n = null;
        ctrl.obj = {
            x : null,
            y : null,
            X : null,
            Y : null,
            K1 : null,
            K2 : null
        };

        ctrl.getDHC1 = function(){
            ApiService.getDHC1(ctrl.obj).then(function(data){
                ctrl.obj.X  = data.X; 
            })
        }

        ctrl.getDHC2 = function(){
            ApiService.getDHC2(ctrl.obj).then(function(data){
                ctrl.obj.Y = data.Y;
            })
        }


        ctrl.getDHK1 = function(){
            ApiService.getDHK1(ctrl.obj).then(function(data){
                ctrl.obj.K1 = data.K1;
            })
        }
        
        ctrl.getDHK2 = function(){
            console.log("fsdfs");
            
            ApiService.getDHK2(ctrl.obj).then(function(data){
                ctrl.obj.K2 = data.K2;
            })
        }
        
    }
    angular.module('crypto').controller('DHController', DHController);
})();