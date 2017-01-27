angular
  .module('components.promotionList', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('promotionList', {
        url: '/',
        component: 'promotionList'
      })
  })