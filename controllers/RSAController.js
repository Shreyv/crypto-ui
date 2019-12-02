(function () {
    function RSAController(ApiService) {
        var ctrl = this;
        ctrl. n = null;
        ctrl.obj = {
            p: null,
            q: null,
            c: null,
            m: null,
            e: null,
            d: null,
            dm: null
        };

        ctrl.getRandom = function(){
            ApiService.getRandom(ctrl.obj).then(function(data){
                ctrl.obj.p  = data.p;
                ctrl.obj.q  = data.q; 
            })
        }

        ctrl.compute = function(){
            if (ctrl.obj.p && ctrl.obj.q){
                ctrl.n = ctrl.obj.p * ctrl.obj.q;
            }
        }

        ctrl.getPrivateKey = function(){
            ApiService.getPrivateKey(ctrl.obj).then(function(data){
                ctrl.obj.d = data.d;
            })
        }

        ctrl.getEncryption = function(){
            ApiService.getEncryption(ctrl.obj).then(function(data){
                ctrl.obj.c = data.c;
            })
        }

        ctrl.getDecryption = function(){
            ApiService.getDecryption(ctrl.obj).then(function(data){
                ctrl.obj.dm = data.dm;
            })
        }
        
    }
    angular.module('crypto').controller('RSAController', RSAController);
})();