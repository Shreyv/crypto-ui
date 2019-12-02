'use strict';
(function () {
    function ApiService($http, $q) {
        return {
            getRandom: function () {
                return $http.get('http://127.0.0.1:5000/rsa/random/' )
                    .then(
                        function (response) {
                            return response.data;
                        },
                        function (errResponse) {
                            console.error('Error');
                            return $q.reject(errResponse);
                        }
                    );
            },
            getPrivateKey: function(data){
                return $http.post('http://127.0.0.1:5000/rsa/privatekey/',data).
                then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Error');
                        return $q.reject(errResponse);
                    }
                )
            },
            getEncryption: function(data){
                return $http.post('http://127.0.0.1:5000/rsa/encrypt/',data).
                then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Error');
                        return $q.reject(errResponse);
                    }
                )
            },
            getDecryption: function(data){
                return $http.post('http://127.0.0.1:5000/rsa/decrypt/',data).
                then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Error');
                        return $q.reject(errResponse);
                    }
                )
            },
            getPublicKey: function(data){
                return $http.post('http://127.0.0.1:5000/eg/public/',data).
                then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Error');
                        return $q.reject(errResponse);
                    }
                )
            },
            getC1: function(data){
                return $http.post('http://127.0.0.1:5000/eg/c1/',data).
                then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Error');
                        return $q.reject(errResponse);
                    }
                )
            },
            getC2: function(data){
                return $http.post('http://127.0.0.1:5000/eg/c2/',data).
                then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Error');
                        return $q.reject(errResponse);
                    }
                )
            },
            getEGDecryption: function(data){
                return $http.post('http://127.0.0.1:5000/eg/decrypt/',data).
                then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Error');
                        return $q.reject(errResponse);
                    }
                )
            },
            getDHC1: function(data){
                return $http.post('http://127.0.0.1:5000/dh/c1/',data).
                then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Error');
                        return $q.reject(errResponse);
                    }
                )
            },
            getDHC2: function(data){
                return $http.post('http://127.0.0.1:5000/dh/c2/',data).
                then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Error');
                        return $q.reject(errResponse);
                    }
                )
            },
            getDHK1: function(data){
                return $http.post('http://127.0.0.1:5000/dh/k1/',data).
                then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Error');
                        return $q.reject(errResponse);
                    }
                )
            },
            getDHK2: function(data){
                return $http.post('http://127.0.0.1:5000/dh/k2/',data).
                then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Error');
                        return $q.reject(errResponse);
                    }
                )
            }

        }

    }

    angular.module('crypto').factory('ApiService', ApiService);
})();