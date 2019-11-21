
var app = angular.module('myApp', ['ngRoute']);

app.controller('formCtrl', function($scope,$http) {
  console.log()

  $scope.submit1=function(){
        let applicant = {
         fname : $scope.fname,
         lname : $scope.lname,
         email : $scope.email,
        // position : $scope.position,
         //resume : $scope.resume
          
       };
       console.log($scope.applicant);
       $http.post("http://localhost:3000", {test: "rishabh"}).then((data,status) => {console.log(data)})
    //   $http.post("http://localhost:3000/", $scope.applicant).then(function(data, status) {
      //  console.log('Data posted successfully');
      //})
  };

  
}
  
);
