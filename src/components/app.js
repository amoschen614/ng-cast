angular.module('video-player').controller('ListCtrl', function ListCtrl() {
  this.videos = window.exampleVideoData;
})
.component('app', {
  templateUrl: './src/templates/app.html'
  
});
