var PromotionDetailMobileController = function(DataService, $stateParams, $window, screenSize) {
  
  DataService.getPromotionData()
    .then(
      (res) => {
        this.promotionObject = res.data.promotion_objects[$stateParams.promoId -1]
      }     
    )
    .catch(DataService.fail)

  this.screen = () => screenSize.is('lg')

}


angular
  .module('components.promotionDetailMobile')
  .controller('PromotionDetailMobileController', ['DataService', '$stateParams' , '$window', 'screenSize', PromotionDetailMobileController])
