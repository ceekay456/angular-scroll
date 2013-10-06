angular.module('duScroll.smoothScroll', ['duScroll.scroller']).
directive('smoothScroll', function(scroller){

  return {
    link : function($scope, $element, $attr){
      var element = angular.element($element[0]);
      element.on('click', function(e){
        if(!$attr.href || $attr.href.indexOf('#') !== 0) return;
        var elem = document.getElementById($attr.href.substring(1));
        if(!elem) return;
        
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();


        var pos = elem.getBoundingClientRect();

        var delta = pos.top;
        scroller.scrollDelta(0, pos.top, 1000);
      });
    }
  };
});