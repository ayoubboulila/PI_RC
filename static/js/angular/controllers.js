'use strict';

/* Controllers */
URL = "http://127.0.0.1"
angular.module('PIRC.controllers', []).
  controller('mvtCtl', ['$scope', '$http', function($scope, $http) {
	  $scope.msg="Hello";
	  console.log("aa");
	  $scope.forward = function(){
		  
		  console.log("forward");
		  
		  $http({
	            method:'POST',
	            url:URL + ':5000/index/forward',
	            headers: {
	               'Content-Type': 'application/json;charset=utf-8'
	            },
	            data:{}
	        })
	        .then(function(resp){
	            console.log(resp);
	        },function(error){
	            console.log(error);
	        });
	  }
	  
$scope.back = function(){
		  
		  console.log("back");
		  
		  $http({
	            method:'POST',
	            url:URL + ':5000/index/backword',
	            headers: {
	               'Content-Type': 'application/json;charset=utf-8'
	            },
	            data:{}
	        })
	        .then(function(resp){
	            console.log(resp);
	        },function(error){
	            console.log(error);
	        });
	  }

$scope.turn_left = function(){
	  
	  console.log("turn_left");
	  
	  $http({
          method:'POST',
          url:URL + ':5000/index/turn_left',
          headers: {
             'Content-Type': 'application/json;charset=utf-8'
          },
          data:{}
      })
      .then(function(resp){
          console.log(resp);
      },function(error){
          console.log(error);
      });
}


$scope.turn_right = function(){
	  
	  console.log("turn_right");
	  
	  $http({
          method:'POST',
          url:URL + ':5000/index/turn_right',
          headers: {
             'Content-Type': 'application/json;charset=utf-8'
          },
          data:{}
      })
      .then(function(resp){
          console.log(resp);
      },function(error){
          console.log(error);
      });
}


$scope.stop = function(){
	  
	  console.log("stop");
	  
	  $http({
          method:'POST',
          url:URL + ':5000/index/stop',
          headers: {
             'Content-Type': 'application/json;charset=utf-8'
          },
          data:{}
      })
      .then(function(resp){
          console.log(resp);
      },function(error){
          console.log(error);
      });
}

  }])
  .controller('MyCtrl2', [function() {

  }]);