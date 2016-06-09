$('.navTriger').on('click', function (e) {
    e.preventDefault();
    $('.mobileNav')
            .toggleClass('active open')
            .css({
                'transform': '',
                '-webkit-transform': '',
                'transition': 'all 0.3s'
            })
});
$('.navList > a').click(function (e) {
    e.preventDefault();
    $('.mobileNav')
            .removeClass('active')
            .css({
                'transform': '',
                '-webkit-transform': '',
                'transition': 'all 0.3s'
            })
    setTimeout(function () {
        $('.mobileNav').removeClass('open');
    }, 500);
});

$(".iframeCnt").swipe({
    //Generic swipe handler for all directions
    swipeStatus: function (event, phase, direction, distance, duration, fingers, fingerData, currentDirection)
    {

        var dist = distance / 8 - 100;

        if (direction == 'down') {
            $('.mobileNav').css({
                'transform': 'translateY(' + dist + '%)',
                '-webkit-transform': 'translateY(' + dist + '%)',
                'transition': 'none'
            }).addClass('open');
        }

        console.log(dist)

        if (phase == 'end' || phase == 'cancel') {
            if (dist > -75)
                $('.mobileNav').css({
                    'transform': 'translateY(0%)',
                    '-webkit-transform': 'translateY(0%)',
                    'transition': 'all 0.3s'
                });
            else
                $('.mobileNav').css({
                    'transform': 'translateY(-100%)',
                    '-webkit-transform': 'translateY(-100%)',
                    'transition': 'all 0.3s'
                });
        }
    },
});
