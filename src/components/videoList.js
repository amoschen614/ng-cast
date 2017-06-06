angular.module('video-player')

.component('videoList', {
  bindings: {
    videos: '<',
    updateCurrentVideo: '<'
  },
  templateUrl: 'src/templates/videoList.html'
  // template: '<h1>test</h1><h5>{{$ctrl.updateCurrentVideo}}</h5>'
});
