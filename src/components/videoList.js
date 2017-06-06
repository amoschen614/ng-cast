angular.module('video-player')

.component('videoList', {
  bindings: {
    videos: '='
  },
  // controller: function($scope) {
  //   $scope.videos = window.exampleVideoData;
  //   console.log("$scope.videos on line 5 is: ", $scope);
  // },
  templateUrl: 'src/templates/videoList.html'
  // template: '<h1>test</h1><h5>{{$ctrl.videos.data[0]}}</h5>'
});
