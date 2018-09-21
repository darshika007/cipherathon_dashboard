$(function(){
    var $ppc = $('.progress-pie-chart'),
      percent = parseInt($ppc.data('percent')),
      deg = 360*percent/100;
    if (percent > 50) {
      $ppc.addClass('gt-50');
    }
    $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
    $('.ppc-percents span').html(percent+'%');
  });

  let circleProgress = new progressBar({
                                    
    type: "top", //top, circle

    targetClass: "progress",

    textClass: "text",

    value: 100,

    duration: 1000, //ms

    completeDuration: 500, //ms

    circle: {

        r: 45

    }

});

  