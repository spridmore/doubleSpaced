angular
  .module("spaceApp")
  .service("homeService", function($http){
    
    // this.postUserName = function(name){
    //         // console.log(name)
    //   return $http({
    //   url: "http://localhost:5000/api/playername",
    //   method: "POST",
    //   data: {"NameOfPlayer" : name}
    //   })
    // }
    this.userName = ""

    this.postUserName = (name) => {
      this.userName = name
    }
    
    // this.getUserName = function() {
    //   return $http.get("http://localhost:5000/api/playername")
    // }
    

  })