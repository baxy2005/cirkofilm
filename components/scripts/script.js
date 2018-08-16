$(document).ready(function() {


$(".owl-all-device").owlCarousel({
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

$('.owl-carousel-small').owlCarousel({
  loop:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }

})

// $('.owl-carousel-small').owlCarousel({
// })
$('.owl-carousel-three').owlCarousel({
    loop:true,
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
$('.owl-carousel-one').owlCarousel({
    loop:true,
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



});
