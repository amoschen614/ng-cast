angular.module('video-player')

.component('search', {
  bindings: {
    queryData: '='
  },
  templateUrl: './src/templates/search.html'
});
