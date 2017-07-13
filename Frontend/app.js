var app = angular.module("spaceApp", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })
    
    .state("game", {
      url: "/game",
      templateUrl: "./views/game.html",
      controller: "gameController"
    })

    .state("users", {
      url: "/users",
      templateUrl: "./views/users.html",
      controller: "userController"
    })

    .state("admin", {
      url: "/admin",
      templateUrl: "./views/admin.html",
      controller: "adminController"
    })

})