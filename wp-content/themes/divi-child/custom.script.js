(function($){

    jQuery(document).ready(function() {
        // Divi Overlap Popup Button Click
        jQuery('.overlay-customclose-btn-2207').click(function() {
            //alert('display-hide');
            jQuery('#divi-overlay-container-2269 .divioverlay-bg').addClass('display-hide');
        });
        var popup2269 = readCookie('divioverlay2269');
        if(popup2269) {
            jQuery('#divi-overlay-container-2269 .divioverlay-bg').addClass('display-hide');
        }
        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        }

        jQuery('#slide-in-open').click(function() {
            jQuery(this).toggleClass('open');
            jQuery('.slide-in-menu-container').toggleClass('slide-in-menu');
        });

        jQuery('#slide-in-open-shop').click(function() {
            jQuery(this).toggleClass('open');
            jQuery('.slide-in-menu-container-shop').toggleClass('slide-in-menu');
        });


        // Header Section Animation Page Scroll
        var lastScrollTop = 0;
        jQuery(window).scroll(function(event) {
            var st = jQuery(this).scrollTop();
            var diffScrollValue = lastScrollTop - st;
            // console.log("diffScrollValue - "+diffScrollValue);
            // console.log("st - "+st);
            if(st <= 140 || st == 0) {
                jQuery("header").css("transform", "translate3d(0%, 0%, 0px)");
            }
            else if(diffScrollValue > 0) {
                jQuery("header").css("transform", "translate3d(0%, 0%, 0px)");
            }
            else {
                jQuery("header").css("transform", "matrix(1, 0, 0, 1, 0, -150)");
            }
            lastScrollTop = st;
        });
        setTimeout(function() {
            var header_height = jQuery("header").height();
            // alert(header_height);
            jQuery("#et-main-area").css("margin-top", header_height);
        }, 1000);


        /* ---------------------------------------------
        POSITION AWARE BUTTON INTERACTION
        ------------------------------------------------ */
        $('.btn:not(.text-only)')
            .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('.bg').css({top:relY, left:relX})
            })
            .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('.bg').css({top:relY, left:relX})
            });


    });


    /*
        jQuery(document).ready(function(){

            jQuery('.social-club-form .show_more_fields').click(function() {
                jQuery(".social-club-form #show_more_fields").show();
            });

            jQuery('.product-more .more').click(function() {
                jQuery('#key_projects .inactive').each(function() {
                    jQuery(this).addClass('active');
                    jQuery(this).removeClass('inactive');
                });
                jQuery(this).hide();
            });

            jQuery('.filters-list .button').click(function(e){
                e.preventDefault();
                var $filter 	=	jQuery(this).data('filter');
                jQuery('.filters-list .button').removeClass('active');
                jQuery(this).addClass('active');
                // alert($filter);
                if( $filter != '*' ) {
                    jQuery('.filter-content-list .item').addClass('inactive');
                    jQuery('.filter-content-list .item-title').addClass('inactive');
                    jQuery("[data-filter*='"+$filter+"']").removeClass('inactive' );
                }
                else {
                    jQuery('.filter-content-list .item').removeClass('inactive');
                    jQuery('.filter-content-list .item-title').removeClass('inactive');
                }
                return false;
            });

            // jQuery('.filters-list .show-filters').click(function() {
            //     jQuery('.filters-list .more-filters').slideToggle();
            // });

            jQuery('.search-retailer .reset').click(function() {
                // alert();
                jQuery(".zip").val('');
                jQuery('.search-retailer').submit();
                // jQuery('form[name="contact-form"]').submit();
                // jQuery('input[type="text"], textarea').val('');
            });


            // Products List - Same Height
            setTimeout(function() {
                jQuery('#ajax-load-more').each(function() {
                    var highestBox = 0;
                    jQuery(this).find('.product-content').each(function() {
                        if(jQuery(this).height() > highestBox) {
                            highestBox = jQuery(this).height();
                        }
                    });
                    // console.log("highestBox "+highestBox);
                    jQuery(this).find('.product-content').height(highestBox);
                });
            }, 1000);
        });


        var value = readCookie('js_newsletter');
        window.onload = function(e) {
            //alert(value);
            (value == null && typeof (value) != undefined) ? loadJSNewsletter() : '';
        }
        function loadJSNewsletter() {
            setTimeout(function () {
                $('.js-newsletter').removeClass('slide-out');
            }, 20000);
        }
        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        }
        jQuery(document).ready(function() {
            jQuery(".close-newsletter, .close-newsletter-popup").click(function(e) {
                // setTimeout(function () {
                    $('.js-newsletter').addClass('slide-out');
                // }, 2000);
                document.cookie = 'js_newsletter=true; path=/';
                return false;
            });
        });

        // <a class="btn" target="_blank" href="http://rawgarden.wpengine.com/" data-anim="slide">
        //     <span class="text">Learn More</span>
        //     <span class="bg" style="top: 60px; left: 121.5px;"></span>
        // </a>

    */

})(jQuery);