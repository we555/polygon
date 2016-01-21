var polySVG = $('#poly-svg');
var pLength = polySVG.find('.p').length;

for (var i = 1; i <= pLength; i++) {
  var item = '.i' + i;

  $(item).mouseover((function (iter) {
    return function() {
      $('svg .p' + iter).addClass('op');
    };
  })(i));

  $(item).mouseout((function (iter) {
    return function() {
      $('svg .p' + iter).removeClass('op');
    };
  })(i));
}