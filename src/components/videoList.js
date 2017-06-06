angular.module('video-player')

.component('videoList', {
  bindings: {
    videos: '<'
  },
  templateUrl: 'src/templates/videoList.html'
  // template: '<h1>test</h1><h5>{{$ctrl.videos.data[0]}}</h5>'
});
