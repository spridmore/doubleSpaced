angular
  .module("spaceApp")
  .controller("userController", function($scope, userService){
    
    $scope.users = [];
    // User = function(name, score) {
    //   this.name = name;
    //   this.score = score;
    // }
  
    userService.getUsers()
      .then(function(response){
        $scope.users = response.data
        console.log(response)
      });

  //  homeService.getUserName().then(function(response) {
  //     console.log(response)
  //   })
  
  })