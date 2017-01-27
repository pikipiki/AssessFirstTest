var PromotionDetailController = function(DataService, $stateParams, $window, screenSize, $scope) {

  var ctrl = this

  DataService.getPromotionData()
    .then(
      (res) => {
        this.promotionObject = res.data.promotion_objects[$stateParams.promoId -1]
      }     
    )
    .catch(DataService.fail)

  var w = angular.element($window);
  $scope.$watch(
    function () {
      return $window.innerWidth;
    },
    function (value) {
      $scope.windowWidth = value;
      if (value<480){
        ctrl.mediaUnder480 = true
      }
      else{
        ctrl.mediaUnder480 = false
      }
    },
    true
  );

  w.bind('resize', function(){
    $scope.$apply()
  })

}

angular
  .module('components.promotionDetail')
  .controller('PromotionDetailController', ['DataService', '$stateParams' , '$window', 'screenSize', '$scope', PromotionDetailController])
