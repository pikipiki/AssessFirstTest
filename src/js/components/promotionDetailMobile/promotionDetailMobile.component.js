var promotionDetailMobile = {
  controller: 'PromotionDetailMobileController',
  templateUrl : 'components/promotionDetailMobile/promotionDetailMobile.html',
  bindings: {
    'checkmedia': '@',
    'property': '@'
  }
}

angular
  .module('components.promotionDetailMobile')
  .component('promotionDetailMobile', promotionDetailMobile)