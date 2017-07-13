angular
  .module("spaceApp")
  .controller("gameController", function ($timeout, $scope, $state, $stateParams, adminService, gameService, userService, homeService) {

    //  js for smooth animations   
    document.body.classList.add('js-loading');
    window.addEventListener("load", showPage);
    function showPage() {
      document.body.classList.remove('js-loading');
    }

    // js for smooth image rendering
    var img = document.querySelector("img");
    document.body.classList.add('js-loading');
    img.addEventListener("load", removeLoadingClass);
    function removeLoadingClass() {
      document.body.classList.remove('js-loading');
    }

    // variable and directive declarations
    $scope.userName = homeService.userName;
    $scope.newEntry = adminService.newQuestion;
    $scope.planetOne = {};
    $scope.planetTwo = {};
    $scope.playerScore = 0;
    $scope.photos = gameService.getPhotos()
    $scope.photoPair = [];
    $scope.questionNumber = 1;
    $scope.showQuestion = true;
    $scope.showPic = true;
    $scope.endGameScreen = false;
    $scope.inGameScore = true;
    $scope.wrongAnswer = false;
    $scope.rightAnswer = false;
    $scope.questionArea = true;

    var randomInt = function () {
      var x = Math.floor(Math.random() * ($scope.photos.length))
      return x;
    }

    // admin option for new entries
    if ($scope.newEntry.length != 0) {
      $scope.photos.push(new Photo(11, $scope.newEntry[0].imageLocation, $scope.newEntry[0].type, $scope.newEntry[0].question))
      $scope.photos.push(new Photo(11, $scope.newEntry[1].imageLocation, $scope.newEntry[1].type, $scope.newEntry[1].question))
    }

    // Initializing game 
    var g = randomInt();
    $scope.planetOne = $scope.photos[g];
    $scope.photos.splice(g, 1);
    $scope.photoPair.push($scope.planetOne);
    for (var i = 0; i < $scope.photos.length; i++) {
      if (($scope.planetOne.id == $scope.photos[i].id) && ($scope.planetOne.name != $scope.photos[i].name)) {
        $scope.photoPair.push($scope.photos[i]);
        $scope.photos.splice(i, 1);
      }
    }

    // controlling animations 
    $(".spacePic").mousedown(function () {
      $scope.rightAnswer = false;
      $scope.wrongAnswer = false; 
      $scope.questionNumber += 1;
      $("#wrong").removeClass("wrongAnswer")
      $("#right").removeClass("rightAnswer")
      $(".quest").removeClass("questionNumber");
      $(".animateQuestion").removeClass("question");
      $("img").removeClass("spacePic");
      $("#removePlanetClass").removeClass("planetRow")
      $(".dMan").removeClass("dongleText");
      // $(".dMan").removeClass("dongleText");      
        console.log(document.getElementById("right"))    
        console.log(document.getElementById("wrong"))             

      setTimeout(function () {
        $("#right").addClass("rightAnswer")        
        $("#wrong").addClass("wrongAnswer")
        $(".quest").addClass("questionNumber");
        $(".animateQuestion").addClass("question");
        $("img").addClass("spacePic");
        $("#removePlanetClass").addClass("planetRow")
        $(".dMan").addClass("dongleText");   

        console.log(document.getElementById("right"))    
        console.log(document.getElementById("wrong"))             
      })
    })

    // game dependent click events
    $scope.picOne = function () {
      // Ending game
      if ($scope.photos.length == 0) {
        $scope.endGameScreen = true;
        $scope.inGameScore = false;
        $scope.showQuestion = false;
        $scope.questionArea = false;
        userService.postStats($scope.userName, $scope.playerScore)
      }
      if ($scope.photoPair[0].name == "Real") {
        $scope.playerScore += 1;
        $scope.rightAnswer = true;
      }
      if ($scope.photoPair[0].name == "Fake") {
        $scope.wrongAnswer = true;
      }
      $scope.photoPair = [];
      var g = randomInt();
      $scope.planetOne = $scope.photos[g];
      $scope.photos.splice(g, 1);
      $scope.photoPair.push($scope.planetOne);
      for (var i = 0; i < $scope.photos.length; i++) {
        if (($scope.planetOne.id == $scope.photos[i].id) && ($scope.planetOne.name != $scope.photos[i].name)) {
          $scope.photoPair.push($scope.photos[i]);
          $scope.photos.splice(i, 1);
        }
      }
      $scope.showPic = true;
    }

    $scope.picTwo = function () {
      // Ending game
      if ($scope.photos.length == 0) {
        $scope.inGameScore = false;
        $scope.showQuestion = false;
        $scope.endGameScreen = true;
        $scope.questionArea = false;
        userService.postStats($scope.userName, $scope.playerScore)
      }

      if ($scope.photoPair[1].name == "Real") {
        $scope.playerScore += 1;
        $scope.rightAnswer = true;
      }
      if ($scope.photoPair[1].name == "Fake") {
        $scope.wrongAnswer = true;
      }
      $scope.photoPair = [];
      $scope.showPic = true;
      var g = randomInt();
      $scope.planetOne = $scope.photos[g];
      $scope.photos.splice(g, 1);
      $scope.photoPair.push($scope.planetOne);
      for (var i = 0; i < $scope.photos.length; i++) {
        if (($scope.planetOne.id == $scope.photos[i].id) && ($scope.planetOne.name != $scope.photos[i].name)) {
          $scope.photoPair.push($scope.photos[i]);
          $scope.photos.splice(i, 1);
        }
      }
    }

    // replaying 
    $scope.reloadGame = function () {
      location.reload();
    }

  })

