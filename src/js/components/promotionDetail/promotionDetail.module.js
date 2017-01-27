angular
  .module('components.promotionDetail', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('promotionDetail', {
        url: '/promo/:promoId',
        component: 'promotionDetail'
      })
  })