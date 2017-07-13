angular
  .module("spaceApp")
  .controller("userController", function($scope, userService){
    
    $scope.users = [];
  
    userService.getUsers()
      .then(function(response){
        $scope.users = response.data
        console.log(response)
      });
  
  })