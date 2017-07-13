angular
  .module("spaceApp")
  .service("homeService", function($http){
    
    this.userName = ""

    this.postUserName = (name) => {
      this.userName = name
    }
  })