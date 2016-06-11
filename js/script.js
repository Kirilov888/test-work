/*Global variables*/
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
};

function getFullScreenWidth(scrollbarWidth) {
    var widthWithoutScrollBar = $("body").width(),
        fullScreenWidth = widthWithoutScrollBar + scrollbarWidth;

    return fullScreenWidth;
};

var isVisible = function(element) {
    if ($(element).length != 0) {
        var elementPosition = $(element).offset(),
            elementTop = elementPosition.top,
            documentTopScroll = $(document).scrollTop(),
            screenHeight = $(window).height();

        if (documentTopScroll > (elementTop - screenHeight / 2)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

function mobileMenuAnimation() {
    $(".menu-hamburger").click(function() {
        var element = $('.navigation'),
            open = element.hasClass('open');

        if (open) {
            element.removeClass('open').slideUp('slow');
            $(this).removeClass('active');
        } else {
            element.addClass('open').slideDown('slow');
            $(this).addClass('active');
        }
    });
};

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
};

function tabsInit() {
    $('.tabs .tab-links a').on('click', function(e) {
        var currentAttrValue = $(this).attr('href');
        $('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();;
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        return false;
    });
};

function changeImagesToBackground(imagesSelector) {
    var imagesArray = $(imagesSelector);
    for (var i = 0; i < imagesArray.length; i++) {
        $(imagesArray[i]).parent().css("background-image", "url(" + $(imagesArray[i]).attr("src") + ")");
    }
    $(imagesArray).detach();
};

function initSlickSlider(element) {
    $(element).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        focusOnActive: false
    });
};

function initProgressBar(progressBar, color, strokeColor, value) {
    var bar = new ProgressBar.Circle(progressBar, {
        color: '#3a494c',
        strokeWidth: 7,
        trailWidth: 7,
        trailColor: strokeColor,
        easing: 'easeInOut',
        duration: 3400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: color,
            width: 7
        },
        to: {
            color: color,
            width: 7
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + '%');
            }

        }
    });
    bar.text.style.fontFamily = '"Bree Serif", serif';
    bar.text.style.fontSize = '36px';


    bar.animate(value);
};

function initAcordeon() {
    $('.akkordeon li > h5').click(function() {
        if (!$(this).hasClass('active')) {
            $('.akkordeon li > h5').removeClass('active').next('div').slideUp();
            $(this).addClass('active');
            $(this).next('div').slideDown(200);
        } else {
            $(this).removeClass('active').next('div').slideUp();
        }
    });

};

function initSmoothScroll(element, scrollDuration) {
    $(element).click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, scrollDuration);
            return false;
        }
    });
};


var initMap = function() {
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(40.6700, -73.9400), // New York
        disableDefaultUI: true,
        styles: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off",
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "off",
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }]
    };

    var mapElement = document.getElementById('map'),
        map = new google.maps.Map(mapElement, mapOptions),
        markerImage = new google.maps.MarkerImage(
            '../images/marker.png',
            new google.maps.Size(48, 60),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 33)
        ),
        marker = new google.maps.Marker({
            icon: markerImage,
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'our location'
        });

    var content = document.createElement('div');
    content.innerHTML = "<strong style='color: #666666'>We are here!</strong>";
    var infowindow = new google.maps.InfoWindow({
        content: content
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}

function initEvents() {

    /*Actions on 'DOM ready' event*/
    $(function() {
        mobileMenuAnimation();

        changeImagesToBackground('.posterity-slider .posterity-slider-item > img');

        initSlickSlider('.posterity-slider');
        initSlickSlider('.carousel');

        tabsInit();

        $(document).on('scroll', function() {
            if (isVisible('.template-properties')) {
                $(document).trigger('progress-bar');

            }
        });

        $(document).on('progress-bar', function(event) {
            initProgressBar(progressBar1, '#a5d2da', '#d7ebef', 0.92);
            initProgressBar(progressBar2, '#9bd6a7', '#d4edd9', 0.86);
            initProgressBar(progressBar3, '#fbbe67', '#fde4bf', 0.78);
            initProgressBar(progressBar4, '#036b7e', '#72acb7', 0.75);
            $(document).unbind('progress-bar');
        });


        initAcordeon();

        initSmoothScroll('.scroll-to-top-button', 1400);

        initMap();

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