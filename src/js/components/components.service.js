var DataService = function($http) {

  this.getPromotionData = () => $http.get('js/webdevtest-data.js')
  this.fail = (err) => console.log(err.statusText)

}

angular
  .module('components')
  .service('DataService', ['$http', DataService])