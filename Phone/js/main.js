var doc = jQuery(document);

doc.ready(function(){
  "use strict";



  $(window).scrollTop(0);


/******** Head Text Type *******/

var typed = new Typed(".mytext", {
  strings: ["App Just  <br /> What Your Needed"],
  smartBackspace: true,
  loop: true,
  backDelay:2000,
  typeSpeed: 100
});


  $('.navbar-nav').onePageNav({
    currentClass: 'active'
  });

  if($(window).scrollTop()<50)
  {
    $('.navbar-nav').addClass('navbar-nav-bg');
  }

  $(window).scroll(function(){

    var top = $(window).scrollTop();

    if(top>=50)
    {
      $('nav').addClass('overlay');
      $('.navbar-nav').removeClass('navbar-nav-bg');
    }

    else if($('nav').hasClass('overlay'))
    {
      $('nav').removeClass('overlay');
    }
    else
    {
      $('.navbar-nav').addClass('navbar-nav-bg');
    }
  })

  $(".screenshot-carousel").owlCarousel({


    responsive:{
    1320:{
    items:3,
    autoplay:true,
    rewind:true,
    loop:true,
    margin: -39,
    center: true,
    },
      991:{
        margin:-24
       },

       767:{
         items:2
       },
       360:{
        items:1
      },
      320:{
        items:1
      }
    }
    // autoHeight:true
    // dots:true,
    // dotsEach:true
    
    // merge:true,
    // lazyLoadEager: 2
    // animateOut:true
    
    // center:true,
  });

  $(".testimonial-container").owlCarousel({
    items:1,
    autoplay:true,
    // loop:true,
    rewind:true
    // margin: -35,
    // center: true,
    // autoHeight:true
    // dots:true,
    // dotsEach:true
    
    // merge:true,
    // lazyLoadEager: 2
    // animateOut:true
    
    // center:true,
  });

  


});






/********** Video Tutorial Modal ********/

$(function () {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});



/********** Background Star ********/


var lFollowX = 0,
		lFollowY = 0,
		x = 0,
		y = 0,
		friction = 1 / 30;

function moveBackground() {
	x += (lFollowX - x) * friction;
	y += (lFollowY - y) * friction;

	//  translate = 'translateX(' + x + 'px, ' + y + 'px)';
	translate = 'translateX(' + x + 'px) translateY(' + y +'px)';

	$('.star1').css({
	  '-webit-transform': translate,
	  '-moz-transform': translate,
	  'transform': translate
	});

	$('.star2').css({
	  '-webit-transform': translate,
	  '-moz-transform': translate,
	  'transform': translate
	});

	$('.star3').css({
	  '-webit-transform': translate,
	  '-moz-transform': translate,
	  'transform': translate
	});

	$('.star4').css({
	  '-webit-transform': translate,
	  '-moz-transform': translate,
	  'transform': translate
	});

	$('.star5').css({
	  '-webit-transform': translate,
	  '-moz-transform': translate,
	  'transform': translate
	});

	$('.star6').css({
	  '-webit-transform': translate,
	  '-moz-transform': translate,
	  'transform': translate
	});

	$('.star7').css({
	  '-webit-transform': translate,
	  '-moz-transform': translate,
	  'transform': translate
	});

	$('.star8').css({
	  '-webit-transform': translate,
	  '-moz-transform': translate,
	  'transform': translate
	});

	window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {
	
	var isHovered = $('.star1:hover').length > 0;
	console.log(isHovered);
  
  // var isHovered1 = $('.star2:hover').length > 0;
	// console.log(isHovered1);
	//if(!$(e.target).hasClass('animate-this')) {
    if(!isHovered) {
      var lMouseX = Math.max(-200, Math.min(200, $(window).width() / 2 - e.clientX)),
          lMouseY = Math.max(-200, Math.min(200, $(window).height() / 2 - e.clientY));
  
      lFollowX = (40 * lMouseX) / 200;
      lFollowY = (40* lMouseY) / 200;
    }

    
});

moveBackground();


/********** Background Star alternative ********/

// var windowWidth = $(window).width();

// $('body').mousemove(function (event) {
//   var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
//   var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
//   $('.star1').css('margin-left', -moveX + 'px');
//   $('.star1').css('margin-top', moveY + 'px');
//   $('.star2').css('margin-left', -moveX + 'px');
//   $('.star2').css('margin-top', moveY + 'px');
//   $('.rec3').css('margin-left', -moveX + 'px');
//   $('.rec3').css('margin-top', moveY + 'px');
//   $('.rec4').css('margin-left', -moveX + 'px');
//   $('.rec4').css('margin-top', -moveY + 'px');
//   $('.rec5').css('margin-left', moveX + 'px');
//   $('.rec5').css('margin-top', -moveY + 'px');
//   // $('.rec6').css('margin-left', moveX + 'px');
//   // $('.rec6').css('margin-top', -moveY + 'px');
//   $('.rec7').css('margin-left', moveX + 'px');
//   $('.rec7').css('margin-top', -moveY + 'px');
//   // $('.rec8').css('margin-left', moveX + 'px');
//   // $('.rec8').css('margin-top', -moveY + 'px');
//   $('.rec9').css('margin-left', moveX + 'px');
//   $('.rec9').css('margin-top', -moveY + 'px');
//   $('.rec10').css('margin-left', moveX + 'px');
//   $('.rec10').css('margin-top', -moveY + 'px');
//   $('.rec11').css('margin-left', moveX + 'px');
//   $('.rec11').css('margin-top', -moveY + 'px');
//   $('.rec12').css('margin-left', moveX + 'px');
//   $('.rec12').css('margin-top', -moveY + 'px');
//   $('.rec13').css('margin-left', moveX + 'px');
//   $('.rec13').css('margin-top', -moveY + 'px');
//   $('.rec14').css('margin-left', moveX + 'px');
//   $('.rec14').css('margin-top', -moveY + 'px');
//   $('.features-rec1').css('margin-left', -moveX + 'px');
//   $('.features-rec1').css('margin-top', moveY + 'px');
//   $('.features-rec2').css('margin-left', -moveX + 'px');
//   $('.features-rec2').css('margin-top', moveY + 'px');
//   // $('.features-rec3').css('margin-left', -moveX + 'px');
//   // $('.features-rec3').css('margin-top', moveY + 'px');
//   $('.features-rec4').css('margin-left', -moveX + 'px');
//   $('.features-rec4').css('margin-top', -moveY + 'px');
//   $('.features-rec5').css('margin-left', moveX + 'px');
//   $('.features-rec5').css('margin-top', -moveY + 'px');
//   $('.features-rec6').css('margin-left', moveX + 'px');
//   $('.features-rec6').css('margin-top', -moveY + 'px');
//   $('.awesome-rec1').css('margin-left', -moveX + 'px');
//   $('.awesome-rec1').css('margin-top', moveY + 'px');
//   $('.awesome-rec2').css('margin-left', -moveX + 'px');
//   $('.awesome-rec2').css('margin-top', moveY + 'px');
//   $('.awesome-rec3').css('margin-left', -moveX + 'px');
//   $('.awesome-rec3').css('margin-top', moveY + 'px');
//   $('.awesome-rec4').css('margin-left', -moveX + 'px');
//   $('.awesome-rec4').css('margin-top', -moveY + 'px');
//   $('.awesome-rec5').css('margin-left', moveX + 'px');
//   $('.awesome-rec5').css('margin-top', -moveY + 'px');
//   $('.awesome-rec6').css('margin-left', moveX + 'px');
//   $('.awesome-rec6').css('margin-top', -moveY + 'px');
//   $('.awesome-rec7').css('margin-left', -moveX + 'px');
//   $('.awesome-rec7').css('margin-top', -moveY + 'px');
//   $('.awesome-rec8').css('margin-left', moveX + 'px');
//   $('.awesome-rec8').css('margin-top', -moveY + 'px');
//   $('.awesome-rec9').css('margin-left', moveX + 'px');
//   $('.awesome-rec9').css('margin-top', -moveY + 'px');
//   $('.app-rec1').css('margin-left', moveX + 'px');
//   $('.app-rec1').css('margin-top', -moveY + 'px');
//   // $('.app-rec2').css('margin-left', -moveX + 'px');
//   // $('.app-rec2').css('margin-top', moveY + 'px');
//   $('.app-rec3').css('margin-left', -moveX + 'px');
//   $('.app-rec3').css('margin-top', moveY + 'px');
//   $('.app-rec4').css('margin-left', -moveX + 'px');
//   $('.app-rec4').css('margin-top', moveY + 'px');
//   // $('.app-rec5').css('margin-left', -moveX + 'px');
//   // $('.app-rec5').css('margin-top', -moveY + 'px');
//   $('.app-rec6').css('margin-left', moveX + 'px');
//   $('.app-rec6').css('margin-top', -moveY + 'px');
//   $('.app-rec7').css('margin-left', -moveX + 'px');
//   $('.app-rec7').css('margin-top', -moveY + 'px');
//   $('.app-rec8').css('margin-left', moveX + 'px');
//   $('.app-rec8').css('margin-top', -moveY + 'px');
//   $('.app-rec9').css('margin-left', moveX + 'px');
//   $('.app-rec9').css('margin-top', -moveY + 'px');
//   $('.app-rec10').css('margin-top', -moveY + 'px');
//   $('.app-rec10').css('margin-left', moveX + 'px');
//   $('.test-rec1').css('margin-left', moveX + 'px');
//   $('.test-rec1').css('margin-top', -moveY + 'px');
//   $('.test-rec2').css('margin-left', -moveX + 'px');
//   $('.test-rec2').css('margin-top', moveY + 'px');
//   $('.test-rec3').css('margin-left', -moveX + 'px');
//   $('.test-rec3').css('margin-top', moveY + 'px');
//   $('.test-rec4').css('margin-left', -moveX + 'px');
//   $('.test-rec4').css('margin-top', moveY + 'px');
//   $('.test-rec5').css('margin-left', -moveX + 'px');
//   $('.test-rec5').css('margin-top', -moveY + 'px');
//   // $('.test-rec6').css('margin-left', moveX + 'px');
//   // $('.test-rec6').css('margin-top', -moveY + 'px');
// });
// // stars jquery end


/********** Main Phone Image ********/

$(document).ready(function(){
    
    $('.img-js').waypoint(function(direction){

      $('.img-js').addClass('animated slideInRight');
    }, {
      offset:'70%'
    });

    $('.img-js1').waypoint(function(direction){

      $('.img-js1').addClass('animated fadeIn');
    }, {
      offset:'70%'
    });
});