const app=angular.module("myApp",[])
      app.controller("deleteCtr",function($scope,$http){
      $http.get().then(function(item){})
});

$scope.removeItem=function(x)
{
    var removedata=$scope.gituser.indexOf(x);
    $scope.gituser.splice(removedata,1)
}
