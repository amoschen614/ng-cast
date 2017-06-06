angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    updateCurrentVideo: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
  // template: '<h1>{{video}}</h1>'
  
});
