/*Global variables*/
function mobileMenuAnimation() {
    $(".menu-hamburger").click(function() {
        var element = $('.navigation'),
            open = element.hasClass('open');

        if (open) {
            element.removeClass('open').slideUp('slow');
        } else {
            element.addClass('open').slideDown('slow');
        }
    });
}

function menuDisplayInit(width) {
    var element = $('.navigation');
    if (width < getFullScreenWidth(getScrollBarWidth())) {
        element.css({
            "display": "block"
        });
    } else {
        element.css({
            "display": "none"
        });
    }
}

function changeImagesToBackground(imagesSelector) {
    var imagesArray = $(imagesSelector);
    for (var i = 0; i < imagesArray.length; i++) {
        $(imagesArray[i]).parent().css("background-image", "url(" + $(imagesArray[i]).attr("src") + ")");
    }
    $(imagesArray).detach();
}

function initEvents() {

    /*Actions on 'DOM ready' event*/
    $(function() {
        mobileMenuAnimation();

        changeImagesToBackground('.posterity-slider .posterity-slider-item > img');

        $('.posterity-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            focusOnActive: false
        });



        $('.tabs .tab-links a').on('click', function(e) {
            var currentAttrValue = $(this).attr('href');
            $('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();;
            $(this).parent('li').addClass('active').siblings().removeClass('active');

            return false;
        });




    });

    /*Actions on 'Window load' event*/
    $(window).on("load", function() {

    });

    /*Actions on 'Window resize' event*/
    $(window).on("resize", function() {
        menuDisplayInit(767);
    });
}

/*Start all functions and actions*/
initEvents();



function getScrollBarWidth() {
    var scrollbarWidth = function() {
        var a, b, c;
        if (c === undefined) {
            a = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
            b = a.children();
            c = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
        }
        return c;
    };

    return scrollbarWidth();
}

function getFullScreenWidth(scrollbarWidth) {
    var widthWithoutScrollBar = $("body").width(),
        fullScreenWidth = widthWithoutScrollBar + scrollbarWidth;

    return fullScreenWidth;
}