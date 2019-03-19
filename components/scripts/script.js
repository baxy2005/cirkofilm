$(document).ready(function () {


    $(".owl-one").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 500,
        margin: 1,
        paginationSpeed: 400,
        autoplay: false,
        items: 1,
        dots: true,
        autoplay: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
                margin: 0
            }
        },
        loop: false,
        rewind: true,
        nav: false,
        lazyLoad: true,
        navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"]
    });

    $('.owl-two').owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 500,
        margin: 12,
        autoplay: false,
        items: 1,
        responsive: {
            0: {
                items: 2.2
            },
            554: {
                items: 2
            },
            992: {
                items: 4
            }
        },
        nav: true,
        navContainer: '#owl-2',
        loop: false,
        rewind: true,
        lazyLoad: true,
        navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"]


    });

    // $('.owl-carousel-small').owlCarousel({
    // })
    $('.owl-four').owlCarousel({
        loop: true,
        nav: true,
        nav: true,
        margin: 12,
        dots: false,
        navContainer: '#owl-4',
        navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 1.2

            },
            554: {
                items: 2,
                margin: 0
            },
            992: {
                items: 3
            }
        }
    })

    $('.owl-three').owlCarousel({
        loop: false,
        rewind: true,
        nav: true,
        margin: 12,
        dots: false,
        navContainer: '#owl-3',
        navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 2.2
            },
            554: {
                items: 2
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    })
    $('.owl-five').owlCarousel({
        loop: false,
        rewind: true,
        nav: true,
        margin: 0,
        dots: false,
        // autoHeight: true,
        navContainer: '#owl-13',
        navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 1.2,
                margin: 12
            },
            554: {
                items: 2,
                margin: 0
            },
            992: {
                items: 3
            }
        }
    })
    $('.owl-six').owlCarousel({
        loop: false,
        rewind: true,
        nav: true,
        margin: 12,
        dots: false,
        // autoHeight: true,
        navContainer: '#owl-13',
        navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
    $('.owl-dates').owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        mouseDrag: false,
        margin: 4,
        navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 1.5
            },
            576: {
                items: 2.5
            },
            768: {
                items: 4.5
            },
            992: {
                items: 5.5
            },
            1200: {
                items: 7
            }
        }
    })



    /*-------------------------------------------
      ScrollMagic
    -------------------------------------------*/

    // FIXME? there is no top-nav element

    if ($('.top-nav').length > 0) {
        // // init ScrollMagic
        var controller = new ScrollMagic.Controller();
        // set timeline

        var ourScene = new ScrollMagic.Scene({
            // triggerElement: '#project01 img',
            triggerHook: 1,
            offset: 60
        })
            .setClassToggle('.top-nav', 'bg-dark') // add class to project01
            // .addIndicators({
            //   // name: 'fade scene',
            //   // colorTrigger: 'black',
            //   // colorStart: '#75C695',
            //   // colorEnd: 'pink'
            // }) // this requires a plugin
            .addTo(controller);

    }

    /*-------------------------------------------
        carousel bg
    -------------------------------------------*/
    // $('.owl-one .item .owl-lazy').each(function() {
    // 	var imgSrc = $(this).attr('src');
    // 	$(this).parent().parent().css({'background-image': 'url('+imgSrc+')'});
    // 	$(this).remove();
    // });

    // $('.nav-tabs').responsiveTabs();

  $('.card-header-tabs .nav-link').on('click', function() {
     $('.card-header-tabs .nav-link').removeClass('active');
  	if ($(this).hasClass('active')) {
  		  $(this).css('border', '3px solid red').removeClass('active');
        } else {
            $(this).addClass('show')
        }
    });
    /*-------------------------------------------
     sponsors  ScrollMagic
    -------------------------------------------*/

    $('#owl_about_main_slider-2').owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        margin: 4,
        navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 1.5
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })

    //
    //   if ( $(window).width() < 576 ) {
    //     startCarousel();
    //   } else {
    //     $('.owl-dis').addClass('off');
    //   }
    //
    //   function startCarousel(){
    //   $(".owl-carousel").owlCarousel({
    //      navigation : true, // Show next and prev buttons
    //      slideSpeed : 500,
    //      margin:0,
    //      paginationSpeed : 400,
    //      autoplay:false,
    //      items : 1.5,
    //      itemsDesktop : false,
    //      itemsDesktopSmall : false,
    //      itemsTablet: false,
    //      itemsMobile : false,
    //      loop:true,
    //      nav:false,
    //      // navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
    //   });
    // }
    // function stopCarousel() {
    //   var owl = $('.owl-dis');
    //   owl.trigger('destroy.owl.carousel');
    //   owl.addClass('off');
    // }
    //
    // $(window).resize(function() {
    //     if ( $(window).width() < 576 ) {
    //       $('.owl-dis').removeClass('off');
    //       startCarousel();
    //     } else {
    //       stopCarousel();
    //     }
    // });
// >>>>>>> bezbranch



/*-------------------------------------------
hero title
-------------------------------------------*/

if ( $(window).width() > 576 ) {

$('.card--hero .card-title').each(function(i) {
var titleO = $(this).html();
var title = titleO.split(" ");
title.forEach(function(item, i, title){
  if(i==1)
    title[i] += "<br/>";
  else
  title[i] += ' ';
})
$(this).html(title.join(''))
});


$('.card--hero .card-title').each(function(i) {
  var width = $(this)
  var heroP = $(this).next()
  if ($(width).innerWidth() < $(heroP).innerWidth() ) {
    // $(heroP).css('border', '3px solid red');
    $(heroP).css({'width':($(width).width()+'px')});
    console.log(width)
      }
});
}

$(window).resize(function() {
    if ( $(window).width() < 576 ) {
      var tilteH1 = $('.card--hero .card-title');
        if (tilteH1.has('br')){
          $('.card--hero .card-title br').replaceWith(' ')
        }
      } else if ( $(window).width() > 576 ) {
      // stopCarousel();
      if ($('.card--hero .card-title br').length){
      }else {
        $('.card--hero .card-title').each(function(i) {
        var titleO = $(this).html();
        var title = titleO.split(" ");
        title.forEach(function(item, i, title){
          if(i==1)
            title[i] += "<br/>";
          else
          title[i] += ' ';
        })
        $(this).html(title.join(''))
        });
      }
    }
});

    function prepareLazyCarousel($element_name) {
        return $($element_name).each(function () {
            var imgSrc = $(this).attr('src');
            $(this).parent().css({ 'background-image': 'url(' + imgSrc + ')' });
            $(this).parent().attr('data-src', imgSrc);
            $(this).remove();
        });
    }

    prepareLazyCarousel('.card-img-wrapper .card-img-top');

    // login modal
    $('#user-modal-open, .show-user-modal .user-modal-backdrop, #user-modal-close')
        .click(function () {
            $('body').toggleClass('show-user-modal');
            $('.navbar-collapse').removeClass('open');
            $('.user-modal-content').load($(this).data("remote"));
            // TODO
            // https://stackoverflow.com/questions/23494468/detect-different-kind-of-scrollbars-eg-normal-hidden-osx
            // https://davidwalsh.name/detect-scrollbar-width
        });

    $('#searchbutton').click(function () {
        $('.container--seach input.form-control').focus();
        $('.container--seach').addClass('focus');
    });


    $('#searchinput').focus(function () {
        // console.log('asd');
        $('body').addClass('searchfocus');
    });
    $('#searchinput').blur(function () {
        // console.log('asd');
        $('body').removeClass('searchfocus');
    });
});
