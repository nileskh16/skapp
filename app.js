(function(){
'use strict';
angular.module('skapp', [])
  .controller('skcon', function($scope){
    $scope.name = "";
    $scope.split_count = function()
    {
      $scope.items = $scope.name.split(',');
      if($scope.name == ""){
            $scope.msg = "Please enter data first";
            disable();
      }
      else if($scope.items.length <= 3) {
        $scope.msg = "Enjoy!";
        enable();
      }
      else if($scope.items.length > 3){
        $scope.msg = "Too Much!";
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
