$(document).ready(function() {

  var fadeTime = 500;
  var runTime = 10000; //20 seconds
  var stop = false;

  function changeGrey() {
    $('.color').fadeOut(fadeTime);
    $('.grey').fadeIn(fadeTime);
  }

  function changeColor() {
    $('.grey').fadeOut(fadeTime);
    $('.color').fadeIn(fadeTime);
  }

  $(".grey").hide();
  $("#start").click(function() {
    $('.color').fadeOut(fadeTime);
    $('.grey').fadeIn(fadeTime);

    animateDiv($('.a'));
    animateDiv($('.b'));
    animateDiv($('.c'));
    animateDiv($('.d'));

    // var interval = setInterval(function() {
    //   changeColor();
    //   changeGrey();
    // }, 1).delay(runTime - 2000);
    //
    // clearInterval(interval);

    setTimeout(function() {
      $('.grey').fadeOut(fadeTime);
      $('.color').fadeIn(fadeTime);
      $('.color').fadeOut(fadeTime);
      $('.grey').fadeIn(fadeTime);
      $('.grey').fadeOut(fadeTime);
      $('.color').fadeIn(fadeTime);
      $('.color').fadeOut(fadeTime);
      $('.grey').fadeIn(fadeTime);
    }, runTime - 2000);

    setTimeout(function(){
      $('.grey').fadeOut(fadeTime);
      $('.color').fadeIn(fadeTime);
      $('.a').stop();
      $('.b').stop();
      $('.c').stop();
      $('.d').stop();
    }, runTime);


    // animateDiv($('.e')) ;
    // animateDiv($('.f')) ;
    // animateDiv($('.g')) ;
  });

  // $("#stop").click(function() {
  //   $('#stop').attr('id', 'start');
  //   $('.grey').fadeOut(fadeTime);
  //   $('.color').fadeIn(fadeTime);
  //   $('.a').stop();
  //   $('.b').stop();
  //   $('.c').stop();
  //   $('.d').stop();
  //   // $('.e').stop();
  //   // $('.f').stop();
  //   // $('.g').stop();
  // });
});

function makeNewPosition($container) {

  // Get viewport dimensions (remove the dimension of the div)
  var h = $container.height() - 80;
  var w = $container.width() - 80;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];

}

function animateDiv($target) {
  var newq = makeNewPosition($target.parent());
  var oldq = $target.offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $target.animate({
    top: newq[0],
    left: newq[1]
  }, speed, function() {
    animateDiv($target);
  });

};

function calcSpeed(prev, next) {

  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = .1;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;

}
