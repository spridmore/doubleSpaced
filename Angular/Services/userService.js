angular
  .module("spaceApp")
  .service("userService", function($http){

this.getUsers = function() {
  return $http.get("http://localhost:5000/api/user")
}

this.postStats = function(name, score) {
      return $http.post("http://localhost:5000/api/user", {"Name" : name, "UserScore" : score})
    }
})

