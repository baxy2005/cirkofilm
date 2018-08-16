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
   navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
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
        items:5
    }
},
  nav: true,
  navContainer: '#owl-2',
  loop:true,
  lazyLoad:true,
  navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]


});

// $('.owl-carousel-small').owlCarousel({
// })
$('.owl-four').owlCarousel({
    loop:true,
    nav:true,
    nav: true,
    navContainer: '#owl-4',
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
$('.owl-one .item source').each(function() {
	var imgSrc = $(this).attr('data-srcset');
	$(this).parent().parent().css({'background-image': 'url('+imgSrc+')'});
	$(this).remove();
});


});
