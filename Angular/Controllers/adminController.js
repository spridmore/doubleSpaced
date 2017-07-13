angular
  .module("spaceApp")
  .controller("adminController", function($scope, adminService){


    $scope.upload = [];
    // $scope.uploadOne = "";
    // $scope.uploadTwo = "";

    var Photo = function(imageLocation, type, question){
      // this.id = id,
      this.imageLocation = imageLocation,
      this.type = type,
      this.question = question
    }

    $scope.uploadPhotos = function() {
      console.log($scope.test)
      if(document.getElementById('radioOne').checked) {
        console.log($scope.uploadOne)
       $scope.upload.push(new Photo($scope.uploadOne, "Real",  $scope.uploadQuestion))
      }
      else{
        console.log($scope.uploadOne)
        
        $scope.upload.push(new Photo($scope.uploadOne, "Fake",  $scope.uploadQuestion))      
      }
      if(document.getElementById('radioTwo').checked){
      $scope.upload.push(new Photo($scope.uploadTwo, "Real",  $scope.uploadQuestion))
      }
      else{
        $scope.upload.push(new Photo($scope.uploadTwo, "Fake",  $scope.uploadQuestion))      
      }
      adminService.uploadNew($scope.upload)
    }




  })