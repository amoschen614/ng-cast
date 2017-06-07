angular.module('video-player').controller('ListCtrl', function ListCtrl($scope, youTube) {
  //this.videos = window.exampleVideoData;
  //'this' references ctrl in html
  //$scope references global angular window
  $scope.updateCurrentVideo = function(video) {
    $scope.currentVideo = video;
  };
  $scope.updateVideos = function(videos) {
    $scope.videos = videos;
    $scope.updateCurrentVideo($scope.videos[0]);
  };  
  $scope.queryData = function(query) {
    youTube.getVideos(query).then(function(response) {
      $scope.updateVideos(response);
    });
  };
  $scope.updateVideos(window.exampleVideoData);
})
.component('app', {
  templateUrl: './src/templates/app.html'
});
