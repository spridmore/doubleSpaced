angular
  .module("spaceApp")
  .service("adminService",function(){

  this.newQuestion = []
  this.uploadNew = (question) => {
   this.newQuestion = question
  }
  })