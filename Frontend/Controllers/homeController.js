angular
  .module("spaceApp")
  .controller("homeController", function($scope, $state, homeService, userService){
    
    // defining variables and directives
    $scope.titleElements = true;
    $scope.logIn = false;
    $scope.userName = ""
    $scope.adminLogIn = false;
    $scope.adminSubmit = false;

    // starting game elements
    $scope.startGame = function() {
      $scope.titleElements = false;      
      $scope.logIn = true;
    }
    
    // admin login feature
    $(document).keypress(function(e) {
      if((e.which == 13) && ($scope.userName == "admin")) {
        $scope.adminLogIn = true;
        $scope.adminSubmit = true;
      }
    });

    // carries username to game view
    $scope.submitName = function() {
      homeService.postUserName($scope.userName) 
    }
 
  })

