var PromotionListController = function(DataService) {

  DataService.getPromotionData()
    .then(
      (res) => {
        this.promotionObjects = res.data.promotion_objects
      }     
    )
    .catch(DataService.fail)

}

angular
  .module('components.promotionList')
  .controller('PromotionListController', ['DataService', PromotionListController])