angular.module('video-player')
.service('youTube', function($http, $window) {
  this.getVideos = function(query) {
    
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: $window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,  
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true 
      }
    }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
      console.log("video received", response.data.items);
      return response.data.items;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log("Bah", response);
    });
  };
});
