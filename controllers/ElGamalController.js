(function () {
    function ElGamalController(ApiService) {
        var ctrl = this;
        ctrl. n = null;
        ctrl.obj = {
            x : null,
            y : null,
            m : null,
            c1 : null,
            c2 : null,
            dm : null,
            r : null
        };

        ctrl.computePublicKey = function(){
            ApiService.getPublicKey(ctrl.obj).then(function(data){
                ctrl.obj.y  = data.y; 
            })
        }

        ctrl.computeC1 = function(){
            ApiService.getC1(ctrl.obj).then(function(data){
                ctrl.obj.c1  = data.c1; 
            })
        }

        ctrl.computeC2 = function(){
            ApiService.getC2(ctrl.obj).then(function(data){
                ctrl.obj.c2 = data.c2;
            })
        }


        ctrl.decrypt = function(){
            ApiService.getEGDecryption(ctrl.obj).then(function(data){
                ctrl.obj.dm = data.dm;
            })
        }
        
    }
    angular.module('crypto').controller('ElGamalController', ElGamalController);
})();