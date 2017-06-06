angular.module('video-player').controller('ListCtrl', function ListCtrl($scope) {
  //this.videos = window.exampleVideoData;
  //'this' references ctrl in html
  $scope.queryData = function(query) {
    console.log('inside queryData');
  };
  $scope.videos = window.exampleVideoData;
  $scope.currentVideo = $scope.videos[0];
  //$scope references global angular window
  $scope.updateCurrentVideo = function(video) {
    $scope.currentVideo = video;
  };
})
.component('app', {
  templateUrl: './src/templates/app.html'
  
});
