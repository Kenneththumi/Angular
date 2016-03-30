/*
*Cytonn Tech.
*@author Kenneth Mwangi <kthumi@cytonn.com>
*
*
*/
/*module*/
var app=angular.module("app",[]); 
/*controller*/      
        app.controller("MyController",['$scope', '$http',function ($scope,$http){
       	    $http.get('data.json').success(
              function(data){
              $scope.players=data;
      });
  }]);
                         
                        
