$(function() {

    // header 
    $('#gnb').hover(function() {
        $('header').addClass('hover')
    }, function() {
        $('header').removeClass('hover')
    })
    $('#gnb>li').hover(function() {
        $(this).children('.dep_2').css({'background':'#fee6d9'})
        $(this).children('a').append('<span class="underbar"></span>')
        $('.underbar').stop().animate({'width':'100%'})
    }, function() {
        $('#gnb .dep_2').css({'background':'none'})
        $('.underbar').remove()
    })

    // scroll gnb event
    $(window).scroll(function() {
        // $('header').addClass('scroll')
        if($('html, body').scrollTop() > 0) {
            $('header').addClass('scroll')
        }
        else {$('header').removeClass('scroll')}
     })

     
    //
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
          
        pagination: {
          el: '.swiper-pagination',
          type: "fraction",
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
    });


    // footer family site click
    $('.fam_site>button').click(function() {
        $('.fam_site_on').toggle()
    })
    $('.fam_site_on .fam_close').click(function() {
        $('.fam_site_on').hide()
    })



    // mo
    $('.mo_allmenu').click(function() {
        $('.mo_gnb_open').toggleClass('close')
        $('header').toggleClass('click')
        $(this).toggleClass('close')
    })

    $('#mo_gnb>li>a').click(function() {
        $(this).next('.dep_2').slideToggle().css('background','#fee6d9')
        $('#mo_gnb>li>a').not(this).removeClass('on').next().slideUp()
        $(this).toggleClass('on')
    })
    

    // 네이버 지도 api
    // var mapOptions = {
    //     center: new naver.maps.LatLng(37.3595704, 127.105399),
    //     zoom: 10
    // };
    
    // var map = new naver.maps.Map('map', mapOptions);

    var map = new naver.maps.Map('map', {

        center: new naver.maps.LatLng(37.395675471064386, 126.71811748352853),
    
        zoom: 17
    
    });
    var marker = new naver.maps.Marker({
    
        position: new naver.maps.LatLng(37.395675471064386, 126.71811748352853),
    
        map: map
    
    });

    var HOME_PATH = window.HOME_PATH || '.';
    var cityhall = new naver.maps.LatLng(37.395675471064386, 126.71811748352853),
        map = new naver.maps.Map('map', {
            center: cityhall.destinationPoint(0, 300),
            zoom: 16
        }),
        marker = new naver.maps.Marker({
            map: map,
            position: cityhall
        });

    var contentString = [
        '<div class="iw_inner">',
        '<h3>한화기념관</h3><br>',
        '<p>인천광역시 남동구 168번길 45</p>',
        '<p>032-431-5142</p>',
        '</div>' 
    ].join('');


    var infowindow = new naver.maps.InfoWindow({
        content: contentString
    });

    naver.maps.Event.addListener(marker, "click", function(e) {
        if (infowindow.getMap()) {
            infowindow.close();
        } else {
            infowindow.open(map, marker);
        }
    });

    infowindow.open(map, marker);
    
    
    
    var map = new naver.maps.Map('map', mapOptions);
}) // ready