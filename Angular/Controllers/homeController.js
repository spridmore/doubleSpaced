angular
  .module("spaceApp")
  .controller("homeController", function($scope, $state, homeService, userService){
    $scope.titleElements = true;
    $scope.logIn = false;
    $scope.userName = ""
    $scope.adminLogIn = false;
    $scope.adminSubmit = false;
    
    // if ($scope.userName == "admin") {
    //   $scope.$on('$locationChangeStart', function(event) {
    //     event.preventDefault();
    //   });
    // }

    $scope.startGame = function() {
      $scope.titleElements = false;      
      $scope.logIn = true;
    }
    
    $(document).keypress(function(e) {
      if((e.which == 13) && ($scope.userName == "admin")) {
        $scope.adminLogIn = true;
        $scope.adminSubmit = true;
      }
    });

    $scope.submitName = function() {
      homeService.postUserName($scope.userName) 
    }
 
  })

