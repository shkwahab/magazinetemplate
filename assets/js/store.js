function slider_owl(slider_id, visible1, visible2, visible3, visible4, margin) {
    $(slider_id).owlCarousel({
        navigation: true,  
        slideSpeed: 500,
        singleItem: true,
        pagination: true,
        dot: true,
        autoplay: false,
        margin: margin,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        responsive: {
            0: {
                items: visible1
            },

            480: {
                items: visible2

            },

            767: {
                items: visible3
            },

            1025: {
                items: visible4
            }
        }
    });
}
$(document).ready(function() {
    var menuLeft = $('.pushmenu-left');
    var menuHome6 = $('.menu-home6');
    var nav_click = $('.icon-pushmenu');
    nav_click.on("click", function(event) {
        event.stopPropagation();
        $(this).toggleClass('active');
        $('body').toggleClass('pushmenu-push-toleft');
        menuHome6.toggleClass('pushmenu-open');
    });
    $(".wrappage").on("click", function() {
        $(this).removeClass('active');
        $('body').removeClass('pushmenu-push-toright').removeClass('pushmenu-push-toleft');
        menuLeft.removeClass('pushmenu-open');
        menuHome6.removeClass('pushmenu-open');
    });
    $("#close-pushmenu").on("click", function() {
        $(this).removeClass('active');
        $('body').removeClass('pushmenu-push-toright');
        menuLeft.removeClass('pushmenu-open');
    });
    $("#close-pushmenu.close-left").on("click", function() {
        $('body').removeClass('pushmenu-push-toleft');
        menuHome6.removeClass('pushmenu-open');
    });

    if ($(".tp-banner").length) {
        $('.ver1 .tp-banner').revolution({
            delay: 9000,
            startwidth: 1920,
            startheight: 798,
            hideThumbs: 200,
            fullWidth: "on",
            forceFullWidth: "on"
                        
        });
        $('.ver1 .tp-banner2').revolution({
            delay: 9000,
            startwidth: 1920,
            startheight: 798,
            hideThumbs: 200,
            fullWidth: "on",
            forceFullWidth: "on"
                        
        });
        $('.ver2 .tp-banner').revolution({
            delay: 9000,
            startwidth: 1213,
            startheight: 700,
            hideThumbs: 200,
            fullWidth: "on",
            forceFullWidth: "on"
        });
        $('.ver2 .tp-banner').revolution({
            delay: 9000,
            startwidth: 1213,
            startheight: 719,
            hideThumbs: 200,
            fullWidth: "on",
            forceFullWidth: "on"
        });
        $('.ver3 .tp-banner').revolution({
            delay: 9000,
            startwidth: 770,
            startheight: 604,
            hideThumbs: 10,
            fullWidth: "on",
            forceFullWidth: "on"
        });
    }
    if ($(".product-img-box #image-view").length) {
        var widthwindow1 = $(window).width();
        if (widthwindow1 >= 1024) {
            $('#image').elevateZoom({
                zoomType: "inner",
                cursor: "crosshair",
                zoomWindowFadeIn: 375,
                zoomWindowFadeOut: 375
            });
        }
    }
    // Tabs
    $(".tab-content").hide();
    $("ul.tabs").each(function() {
        $(this).children().first().addClass("active");
        $(this).next().children().first().show().addClass("active");
    });
    $("ul.tabs li").each(function() {
        $(this).on("click", function() {
            var tab_content = $(this).parent().next().children();
            $(this).parent().children().removeClass("active");
            $(this).addClass("active");
            tab_content.hide().removeClass("active");
            var activeTab = $(this).attr("rel");
            $("#" + activeTab).fadeIn(400).addClass("active");
        });
    });
    // End tabs
    $(".products.grid_full .product").each(function() {
        $(this).find(".product-images").wrap('<div class="wrap-product-images"></div>');
        $(this).find(".wrap-product-images").append($(this).find(".add-to-cart")).append($(this).find(".action"));
    });
    // Slider products
    var menu_top_header3 = $(".header-v3 .menu-top");
    var menu_level1 = $("ul.menu-level-1");
    var sub_menu = $(".mega-menu .sub-menu");
    sub_menu.prev().addClass('icon_plus');
    var header3_menu2 = $(".header-v3 .menu-top li.level-1 .menu-level2");
    $(window).on("orientationchange load resize", function() {
        $('.awe-page-loading').delay(1000).fadeOut('400', function() {
            $(this).fadeOut()
        });
        initialize();
        var widthwindow = $(window).width();
        var width_iframe = widthwindow - 60;
        var height_iframe;
        if (widthwindow > 1024) {
            menu_top_header3.insertAfter($(".header-v3 .search.dropdown"));
            sub_menu.addClass("list-menu");
            height_iframe = 552;
        } else {
            sub_menu.removeClass("list-menu");
            menu_top_header3.insertAfter($(".header-v3 .header-top"));
            height_iframe = (width_iframe*315)/560;
        }
        $('#box-user iframe').css({
            "height": height_iframe + "px"
        });
        $("#googleMap").css({
            "height": $(".contact-form").innerHeight() + "px"
        });
        $(".mockup-text").css({
            "height": $(".mockup-images").innerHeight() + "px"
        });
    });

    // Slider
    slider_owl(".product-tab-content", 1, 2, 3, 5, 20);
    
    slider_owl(".slider-product-2-item .blog-post-inner", 1, 2, 2, 2);
    slider_owl(".new-product-bar .product-tab-content1", 1, 2, 2, 3, 20);
    slider_owl(".blog-post-inner", 1, 2, 3, 2, 30);
    slider_owl(".brand-content", 2, 3, 4, 6, 0);
    slider_owl(".slide-four-item", 1, 2, 3, 3, 30);
    slider_owl(".slide-two-item", 1, 2, 2, 2, 30);
    slider_owl(".slide-item-youtube", 1, 2, 2, 2, 30);
    slider_owl(".slider-one-item", 1, 1, 1, 1, 0);
    
    
    var widthwindow = $(window).width();
    if (widthwindow < 768) {
        slider_owl(".slide-owl-mobile",1,2,2,3)
    }

    // click to zoom
    var img_box_thum = $(".product-img-box .thumb-content li");
    img_box_thum.first().addClass("active");
    img_box_thum.on("click", function() {
        img_box_thum.removeClass("active");
        $(this).addClass("active");
    });
    // Click to Hover
    $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).fadeIn(200).toggleClass("hover");
        $(this).toggleClass("active");
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).fadeOut(200).toggleClass("hover");
        $(this).toggleClass("active");
    });

    // Click Icon Menu Mobile
    $(".icon-menu-mobile").on("click", function() {
        $(".navbar-nav.ver1").slideToggle();
        $(this).toggleClass("active");
    });
    $(".header-v3 .icon-menu-mobile").on("click", function() {
        menu_top_header3.slideToggle();
    });
    $('li:has(ul)').addClass('hassub');
    $('li:has(".sub-menu")').addClass('images hassub');
    $(".sub-menu img").parent().addClass("images");
    $(".mega-menu ul li a").after('<i class="fa fa-plus"></i>');
    $(".nav-home6 li a").after('<i class="fa fa-plus"></i>');

    $(".ordering .list").on("click", function() {
        $(this).toggleClass("active");
        $(".products").addClass("list-item");
        $(".ordering .col").removeClass("active");
        $(".products.grid_full .product").each(function() {
            $(this).append($(this).find(".add-to-cart"));
            $(this).append($(this).find(".action"));
        });
    });
    $(".ordering .col").on("click", function() {
        $(this).toggleClass("active");
        $(".products").removeClass("list-item");
        $(".ordering .list").removeClass("active");
        $(".products.grid_full .product").each(function() {
            $(this).find(".wrap-product-images").append($(this).find(".add-to-cart")).append($(this).find(".action"));
        });
    });

    $(".close-popup").on("click", function() {
        $(".popup-content").hide();
    });
    $(".closeqv").on("click", function() {
        $(".quickview-wrapper").hide();
    });
    $('#rtl').on("click", function() {
        $('body').toggleClass('rtl');
    });

    $("ul.product-categories li.hassub a").after('<i class="fa fa-caret-right"></i>');
    $("ul li.hassub i").on("click", function() {
        $(this).next().slideToggle();
        $(this).toggleClass("active");
        $(this).parent().toggleClass("active");
    });
    var megamenu_v2 = $(".megamenu-v2");
    $("#header .fa-bars").on("click", function() {
        megamenu_v2.addClass("show-ef");
    });

    $(".megamenu-v2 .fa-times").on("click", function() {
        megamenu_v2.removeClass("show-ef");
    });
    $(".form-check").on("click", function() {
       $(this).toggleClass("active"); 
    });
    // googleMap
    function initialize() {
        if ($("#googleMap").length) {
            // Center
            var center = new google.maps.LatLng(40.746701, -73.991570);

            // Map Options      
            var mapOptions = {
                zoom: 15,
                center: center,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
            var image = 'assets/images/google-map-icon.png';
            var marker = new Marker({
                map: map,
                position: new google.maps.LatLng(40.746701, -73.991570),
                icon: image
            });
        }
    }
    // End google map
    /* event more-views click see big image. */
    var back_to_top = $('#back-to-top');
    if (back_to_top.length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    back_to_top.addClass('show');
                } else {
                    back_to_top.removeClass('show');
                }
            };
        $(window).on('scroll', function() {
            backToTop();
        });
        back_to_top.on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    if ($('.quantity').length > 0) {
        var form_cart = $('form .quantity');
        form_cart.prepend('<span class="minus"><i class="fa fa-minus"></i></span>');
        form_cart.append('<span class="plus"><i class="fa fa-plus"></i></span>');

        var minus = form_cart.find($('.minus'));
        var plus = form_cart.find($('.plus'));

        minus.on('click', function() {
            var qty = $(this).parent().find('.qty');
            if (qty.val() <= 1) {
                qty.val(1);
            } else {
                qty.val((parseInt(qty.val()) - 1));
            }
        });
        plus.on('click', function() {
            var qty = $(this).parent().find('.qty');
            qty.val((parseInt(qty.val()) + 1));
        });
    }
    $(".calculate").on('click', function() {
        $(this).next().slideToggle();
        $(this).toggleClass("active");
    });
    var click_youtube = $('.item-youtube-slide .post-item');
    if (click_youtube.length > 0) {
        click_youtube.slideyoutube();
        click_youtube.first().addClass('active');
        click_youtube.on("click", function() {
            click_youtube.removeClass('active');
            $(this).addClass('active');
        });
    }

    if ($('.wow').length > 0) {
        wow = new WOW({
            animateClass: 'animated',
            offset: 200,
            callback: function(box) {
                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
        });
        wow.init();
    }
    var slider_lookbook2 = $('.slider-loobook2');
    if (slider_lookbook2.length > 0) {
        slider_lookbook2.slick({
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
    if ($('.blog-masonry').length > 0) {
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    }
    var slider_images = $(".slider-dot-images");
    var items_count = slider_images.children().length;
    var number_active;
    if (items_count % 2 == 1) {
        number_active = (items_count - 1)/2;
    }else{
        number_active = items_count/2 - 1;
    }

    slider_images.each(function() {
        var carousel = $(this);
        carousel.owlCarousel({
            items: 1,
            loop: true,
            center: true,
            smartSpeed: 450,
        });
    });
    slider_images.trigger("to.owl.carousel", [number_active, 1, true]);
    // slider_images.children(".owl-stage-outer").before(slider_images.children(".owl-controls"));

    // 1) ASSIGN EACH 'DOT' A NUMBER
    dotcount = 1;
    $('.slider-dot-images .owl-dot').each(function() {
        $(this).addClass('dotnumber' + dotcount);
        $(this).attr('data-info', dotcount);
        dotcount = dotcount + 1;
    });

    // 2) ASSIGN EACH 'SLIDE' A NUMBER
    slidecount = 1;
    $('.slider-dot-images .owl-item').not('.cloned').each(function() {
        $(this).addClass('slidenumber' + slidecount);
        slidecount = slidecount + 1;
    });
    // SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
    $('.slider-dot-images .owl-dot').each(function() {
        grab = $(this).data('info');
        slidegrab = $('.slidenumber' + grab + ' .thumb').attr('src');
        $(this).css("background-image", "url(" + slidegrab + ")");
    });
    $('.owl-controls .owl-prev').html('<i class="fa fa-chevron-left"></i>');
    $('.owl-controls .owl-next').html('<i class="fa fa-chevron-right"></i>');
    var end_slide_youtube = $('#box-user iframe');
    $('.post-item.video').on('click', function( e ) {
        e.stopPropagation();
        Custombox.open({
            target: '#box-user',
            effect: 'fall'
        });
        e.preventDefault();
        if ($(this).data('videosite') == "youtube") {
            var id_youtube_url =  $(this).data('videourl');
            var regex = /(\?v=|\&v=|\/\d\/|\/embed\/|\/v\/|\.be\/)([a-zA-Z0-9\-\_]+)/;
            var regexyoutubeurl = id_youtube_url.match(regex);
            var url = 'http://www.youtube.com/embed/' + regexyoutubeurl[2] + '?autoplay=1';
        } else if($(this).data('videosite') == "vimeo") {
            var id_vimeo_url =  $(this).data('videourl');
            var regex1 = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
            var regexvimeourl = id_vimeo_url.match(regex1);
            var url = 'http://player.vimeo.com/video/' + regexvimeourl[5] + '?autoplay=1';
        }
        end_slide_youtube.attr('src', url);
    });
    $('#close').on('click', function( e ) {
        Custombox.close();
        $('#box-user iframe').attr('src','');
    });
    $('body').on('click', function() {
        $('#box-user iframe').attr('src','');
    });
});


    $('.icon-menu-table').on('click', function(){
    $(".menu-table").css("right","0px");
    $(".menu-table").css("visibility","visible")
});

$('.closebtn').on('click', function(){
    $(".menu-table").css("right","-315px");
    $(".menu-table").css("visibility","hidden");
});
