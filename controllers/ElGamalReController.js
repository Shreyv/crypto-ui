(function () {
    function ElGamalReController(ApiService) {
        var ctrl = this;
        ctrl. n = null;
        ctrl.obj = {
          c1_: null,
          c2_ : null,
          s : null,  
          eg1:{
            x : null,
            y : null,
            m : null,
            c1 : null,
            c2 : null,
            r : null
        }
        };

        ctrl.computePublicKey = function(){
            ApiService.getEGRPublicKey(ctrl.obj).then(function(data){
                ctrl.obj = data; 
            })
        }

        ctrl.getEGRC1 = function(){
            ApiService.getEGRC1(ctrl.obj).then(function(data){
                ctrl.obj.eg1.c1  = data.eg1.c1; 
            })
        }

        ctrl.getEGRC2 = function(){
            ApiService.getEGRC2(ctrl.obj).then(function(data){
                ctrl.obj.eg1.c2 = data.eg1.c2;
            })
        }

        ctrl.getREE = function(){
            ApiService.getREE(ctrl.obj).then(function(data){
                ctrl.obj.c1_ = data.c1_;
                ctrl.obj.c2_ = data.c2_;
            })
        }

        ctrl.getDecrypt = function(){
            ApiService.getREEDecrypt(ctrl.obj).then(function(data){
                ctrl.obj.dm  = data.dm; 
            })
        }



        
    }
    angular.module('crypto').controller('ElGamalReController', ElGamalReController);
})();