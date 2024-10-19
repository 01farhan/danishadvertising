!function(e){"use strict";e(document).ready(function(){e(document).on("click",".navbar-area .navbar-nav li.menu-item-has-children>a",function(e){e.preventDefault()}),e(window).resize(function(){var a=e(".menu-item-has-children");window.innerWidth<991&&(e(a).on("click",function(a){e(this).find(".sub-menu").first().toggleClass("active"),a.stopPropagation()}),e(".menu-item-has-children > a").on("click",function(a){e(this).is(".clicked")||(a.preventDefault(),e(this).addClass("clicked"))}))}),new WOW().init(),e(".video-play-btn,.video-popup,.small-vide-play-btn").magnificPopup({type:"video"}),e(".image-popup").magnificPopup({type:"image"}),e(document).on("click",".back-to-top",function(){e("html,body").animate({scrollTop:0},2e3)}),e(".count-num").counterUp({delay:20,time:3e3}),e(document).on("click",".cross-menu",function(a){a.preventDefault(),e(this).toggleClass("change")});var a=e(".case-studies-masonry");a.length>0&&(e(".case-studies-masonry").imagesLoaded(function(){var t=a.isotope({itemSelector:".masonry-item",masonry:{gutter:0}});e(document).on("click",".case-studies-menu li",function(){var a=e(this).attr("data-filter");t.isotope({filter:a})})}),e(document).on("click",".case-studies-menu li",function(){e(this).siblings().removeClass("active"),e(this).addClass("active")}));var t=e(".recent-case-filter-02");t.length>0&&(e(".recent-case-filter-02").imagesLoaded(function(){var a=t.isotope({itemSelector:".case-masonry",masonry:{gutter:0}});e(document).on("click",".recent-case-filter-menu li",function(){var t=e(this).attr("data-filter");a.isotope({filter:t})})}),e(document).on("click",".recent-case-filter-menu li",function(){e(this).siblings().removeClass("active"),e(this).addClass("active")}));var i=e(".testimonial-carousel");i.length>0&&i.owlCarousel({loop:!0,autoplay:!0,autoPlayTimeout:1e3,margin:30,dots:!0,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],animateOut:"fadeOut",animateIn:"fadeIn",responsive:{0:{items:1},599:{items:2}}});var i=e(".blog-grid-carousel");i.length>0&&i.owlCarousel({loop:!0,autoplay:!0,autoPlayTimeout:1e3,margin:30,dots:!0,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],animateOut:"fadeOut",animateIn:"fadeIn",responsive:{0:{items:1},460:{items:1},599:{items:1},768:{items:2},960:{items:2},1200:{items:3},1920:{items:3}}});var n=e(".header-slider");n.length>0&&n.owlCarousel({loop:!0,autoplay:!0,autoPlayTimeout:1e3,margin:30,dots:!0,nav:!0,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],animateOut:"fadeOut",animateIn:"fadeIn",responsive:{0:{items:1,nav:!1},460:{items:1,nav:!1},599:{items:1},768:{items:1},960:{items:1},1200:{items:1},1920:{items:1}}}),e(".client-active-area").owlCarousel({loop:!0,items:5,nav:!0,margin:30,autoplay:1e3,dots:!1,navText:['<span data-icon="&#x23;"></span>','<span data-icon="&#x24;"></span>'],responsive:{0:{items:2},600:{items:3},992:{items:4},1200:{items:5}}});var s=e("#body-overlay"),o=e("#search-popup");e(document).on("click","#body-overlay",function(e){e.preventDefault(),s.removeClass("active"),o.removeClass("active")}),e(document).on("click",".border-none",function(e){e.preventDefault(),s.removeClass("active"),o.removeClass("active")}),e(document).on("click","#search",function(e){e.preventDefault(),o.addClass("active"),s.addClass("active")})}),e(window).on("scroll",function(){var a=e(".back-to-top");e(window).scrollTop()>1e3?a.fadeIn(1e3):a.fadeOut(1e3),e(window).scrollTop()>=1?e(".nav-custom").addClass("nav-custom-fixed"):e(".nav-custom").removeClass("nav-custom-fixed");var a=e(".back-to-top");e(window).scrollTop()>1e3?a.fadeIn(1e3):a.fadeOut(1e3)}),e(window).on("load",function(){e("#preloader").fadeOut(1e3),e(".back-to-top").fadeOut(),e(document).on("click",".cancel-preloader a",function(a){a.preventDefault(),e("#preloader").fadeOut(2e3)})})}(jQuery);


            // Disable right-click
            document.addEventListener('contextmenu', (e) => e.preventDefault());

            function ctrlShiftKey(e, keyCode) {
                return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
            }

            document.onkeydown = (e) => {
                // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
                if (
                    event.keyCode === 123 ||
                    ctrlShiftKey(e, 'I') ||
                    ctrlShiftKey(e, 'J') ||
                    ctrlShiftKey(e, 'C') ||
                    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
                )
                    return false;
            };
            $('body').bind('copy paste', function (e) {
                e.preventDefault(); return false;
            });
            window.ondragstart = function () { return false; }
            function disableSelect(event) {
                event.preventDefault();
            }

            function startDrag(event) {
                window.addEventListener('mouseup', onDragEnd);
                window.addEventListener('selectstart', disableSelect);
                // ... my other code
            }

            function onDragEnd() {
                window.removeEventListener('mouseup', onDragEnd);
                window.removeEventListener('selectstart', disableSelect);
                // ... my other code
            }
       