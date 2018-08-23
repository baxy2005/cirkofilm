$(document).ready(function() {


$(".owl-one").owlCarousel({
   navigation : true, // Show next and prev buttons
   slideSpeed : 500,
   margin:1,
   paginationSpeed : 400,
   autoplay:false,
   items : 1,
   responsive:{
    0:{
        items:1.1
    },
    576:{
        items:1,
        margin:0
    }
},
   loop:true,
   nav:true,
   lazyLoad:true,
   navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"]
});

$('.owl-two').owlCarousel({
  navigation : false, // Show next and prev buttons
  slideSpeed : 500,
  margin:1,
  autoplay:false,
  items : 1,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:4
    },
    1000:{
        items:4
    }
},
  nav: true,
  navContainer: '#owl-2',
  loop:true,
  lazyLoad:true,
  navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"]


});

// $('.owl-carousel-small').owlCarousel({
// })
$('.owl-four').owlCarousel({
    loop:true,
    nav:true,
    nav: true,
    navContainer: '#owl-4',
    navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.owl-three').owlCarousel({
    loop:true,
    nav:true,
    nav: true,
    navContainer: '#owl-3',
    navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.owl-dates').owlCarousel({
    loop:false,
    nav: true,
    margin:4,
    navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
        0:{
            items:1.5
        },
        600:{
            items:5.5
        },
        1000:{
            items:7
        }
    }
})
$('.owl-hours').owlCarousel({
    loop:false,
    nav: true,
    margin:4,
    navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
        0:{
            items:1.5
        },
        600:{
            items:5.5
        },
        1000:{
            items:6.5
        }
    }
})


/*-------------------------------------------
  ScrollMagic
-------------------------------------------*/

// init ScrollMagic
var controller = new ScrollMagic.Controller();
// set timeline

var ourScene = new ScrollMagic.Scene({
  // triggerElement: '#project01 img',
  triggerHook: 1,
  offset:60
})
.setClassToggle('.top-nav', 'bg-dark') // add class to project01
// .addIndicators({
//   // name: 'fade scene',
//   // colorTrigger: 'black',
//   // colorStart: '#75C695',
//   // colorEnd: 'pink'
// }) // this requires a plugin
.addTo(controller);

/*-------------------------------------------
    carousel bg
-------------------------------------------*/
// $('.owl-one .item .owl-lazy').each(function() {
// 	var imgSrc = $(this).attr('src');
// 	$(this).parent().parent().css({'background-image': 'url('+imgSrc+')'});
// 	$(this).remove();
// });

  // $('.nav-tabs').responsiveTabs();

  $('.nav-link').on('click', function() {
     $('.nav-link').removeClass('active');
  	if ($(this).hasClass('active')) {
  		  $(this).css('border', '3px solid red').removeClass('active');

    }else {
      $(this).addClass('show')
    }
  });


});
