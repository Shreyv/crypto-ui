(function () {
    function UniversalElgamalController(ApiService) {
        var ctrl = this;
        ctrl.obj = {
            r1: null, 
            c2_: null,
            m: null,
            c1_: null,
            g: 3,
            c3_: null,
            t: null,
            x: null,
            y: null,
            c2: null,
            s: null, 
            r2: null,
            c1: null,
            p: 65537,
            c4_: null,
            c3: null,
            c4: null
        };

        ctrl.computePublicKey = function(){
            ApiService.getUniversalPublicKey(ctrl.obj).then(function(data){
                ctrl.obj = data; 
            })
        }

        ctrl.getC1 = function(){
            ApiService.getUniversalC1(ctrl.obj).then(function(data){
                ctrl.obj.c1  = data.c1; 
            })
        }

        ctrl.getC2 = function(){
            ApiService.getUniversalC2(ctrl.obj).then(function(data){
                ctrl.obj.c2  = data.c2; 
            })
        }

        ctrl.getC3 = function(){
            ApiService.getUniversalC3(ctrl.obj).then(function(data){
                ctrl.obj.c3  = data.c3; 
            })
        }

        ctrl.getC4 = function(){
            ApiService.getUniversalC4(ctrl.obj).then(function(data){
                ctrl.obj.c4  = data.c4; 
            })
        }

        ctrl.getC1_ = function(){
            ApiService.getUniversalC1_(ctrl.obj).then(function(data){
                ctrl.obj.c1_  = data.c1_; 
            })
        }

        ctrl.getC2_ = function(){
            ApiService.getUniversalC2_(ctrl.obj).then(function(data){
                ctrl.obj.c2_  = data.c2_; 
            })
        }

        ctrl.getC3_ = function(){
            ApiService.getUniversalC3_(ctrl.obj).then(function(data){
                ctrl.obj.c3_  = data.c3_; 
            })
        }

        ctrl.getC4_ = function(){
            ApiService.getUniversalC4_(ctrl.obj).then(function(data){
                ctrl.obj.c4_  = data.c4_; 
            })
        }

        ctrl.getDecrypt = function(){
            ApiService.getUniversalDecrypt(ctrl.obj).then(function(data){
                ctrl.obj.dm  = data.dm; 
            })
        }

     



        
    }
    angular.module('crypto').controller('UniversalElgamalController', UniversalElgamalController);
})();