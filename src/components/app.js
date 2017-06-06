angular.module('video-player').controller('ListCtrl', function ListCtrl() {
  this.videos = {
    data: window.exampleVideoData
  };
})
.component('app', {
  templateUrl: './src/templates/app.html'
});
