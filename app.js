(function(){
'use strict';
angular.module('skapp', [])
  .controller('skcon', function($scope){
    $scope.name = "";
    $scope.split_count = function()
    {
      $scope.items = $scope.name.split(',');
      if($scope.name == ""){
            $scope.msg = "Please furnish apposite information.";
            disable();
      }
      else if($scope.items.length <= 3) {
        $scope.msg = "You are on right track.";
        enable();
      }
      else if($scope.items.length > 3){
        $scope.msg = "You are eating too much.";
        enable();
     }
    };
    var enable = function(){
      $scope.mystyle = {
        color: 'green',
        fontSize: '15px'
      }
      $scope.textstyle = {
        outlineColor: 'green'
      }
    }

    var disable = function(){
      $scope.mystyle = {
        color: 'red',
        fontSize: '15px'
      }
      $scope.textstyle = {
        outlineColor: 'red'
      }
    }
  });
})();
