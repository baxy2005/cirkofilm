$(document).ready(function(){$(".owl-one").owlCarousel({navigation:!1,slideSpeed:500,margin:1,paginationSpeed:400,autoplay:!1,items:1,dots:!0,responsive:{0:{items:1},576:{items:1,margin:0}},loop:!0,nav:!1,lazyLoad:!0,navText:["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"]}),$(".owl-two").owlCarousel({navigation:!1,slideSpeed:500,margin:12,autoplay:!1,items:1,responsive:{0:{items:2.2},554:{items:2},992:{items:4}},nav:!0,navContainer:"#owl-2",loop:!0,lazyLoad:!0,navText:["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"]}),$(".owl-four").owlCarousel({loop:!0,nav:!0,nav:!0,margin:12,navContainer:"#owl-4",navText:["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"],responsive:{0:{items:1.2},554:{items:2,margin:0},992:{items:3}}}),$(".owl-three").owlCarousel({loop:!0,nav:!0,nav:!0,margin:12,dots:!1,navContainer:"#owl-3",navText:["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"],responsive:{0:{items:2.2},554:{items:2},768:{items:1},992:{items:2}}}),$(".owl-five").owlCarousel({loop:!0,nav:!0,nav:!0,margin:0,dots:!1,navContainer:"#owl-13",navText:["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"],responsive:{0:{items:1.2,margin:12},554:{items:2,margin:0},992:{items:3}}}),$(".owl-six").owlCarousel({loop:!0,nav:!0,nav:!0,margin:12,dots:!1,navContainer:"#owl-13",navText:["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"],responsive:{0:{items:2},992:{items:3}}}),$(".owl-dates").owlCarousel({loop:!1,nav:!1,dots:!1,mouseDrag:!1,margin:4,navText:["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"],responsive:{0:{items:1.5},576:{items:2.5},768:{items:4.5},992:{items:5.5},1200:{items:7}}});var a=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerHook:1,offset:60}).setClassToggle(".top-nav","bg-dark").addTo(a);$(".nav-link").on("click",function(){$(".nav-link").removeClass("active"),$(this).hasClass("active")?$(this).css("border","3px solid red").removeClass("active"):$(this).addClass("show")}),$("#owl_about_main_slider-2").owlCarousel({loop:!1,nav:!1,dots:!1,margin:4,navText:["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"],responsive:{0:{items:1.5},576:{items:2},768:{items:3},992:{items:4},1200:{items:6}}}),function(a){$(a).each(function(){var a=$(this).attr("src");$(this).parent().css({"background-image":"url("+a+")"}),$(this).parent().attr("data-src",a),$(this).remove()})}(".card-img-wrapper .card-img-top"),$("#user-modal-open, .show-user-modal .user-modal-backdrop,  .show-user-modal #user-modal-close").click(function(){$("body").toggleClass("show-user-modal"),$(".navbar-collapse").removeClass("open")})});