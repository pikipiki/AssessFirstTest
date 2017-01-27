angular
  .module('components', [
    'components.promotionList',
    'components.promotionDetail',
    'components.promotionDetailMobile'
  ])
  .filter('onlyNumbers', function () {
    return function (item) {
      return item.replace(/[^\d|^,|^.]/g, '');
    }
  })
  .filter('underscoreless', function () {
    return function (input) {
        return input.replace(/_/g, ' ');
    };
  });