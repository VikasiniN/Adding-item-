var app = angular.module("myApp",[]);
app.controller("myCtr",function($scope){
$scope.message = "hello"
$scope.Addusers=function(){  
$scope.users.push({
          name:$scope.name,
          password:$scope.password
 });
     };
$scope.users= [
        {
            name:"abc",
            password:"123"
        },
        {
            name:"aabb",
            password:"9786"
        },
        {
            name:"bbcc",
            password:"9786"
        }

    ];   
});
  