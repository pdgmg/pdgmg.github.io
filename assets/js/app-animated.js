$(document).ready(function () {

    var vw = $(window).width();
    var duration;
    var duration1;
    var vw = $(window).width();
    if (vw < 992 ){
        duration = 1000;
        duration1 = 1300;
    }else{
        duration = 2000;
        duration1 = 2300;
    }
    window.addEventListener('resize', function(event) {
        var vw = $(window).width();
        if (vw < 992 ){
            duration = 1000;
            duration1 = 1300;
        }else{
            duration = 2000;
            duration1 = 2300;
        }
    });

    var controller = new ScrollMagic.Controller();
    var tween = TweenMax.fromTo(".mob-animated", 1,
        {position:"absolute",left:"0%"},
        {position:"relative",left: "-100%", yoyo: true, ease: Circ.easeInOut}
    );

// build scene
    var scene = new ScrollMagic.Scene({triggerElement: ".animated-from-left", duration: duration1, offset: -150,triggerHook: 0})
        .setPin(".animated-from-left",{pushFollowers: true})
        // .addIndicators({name: "loop"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene = new ScrollMagic.Scene({triggerElement: ".animated-from-left", duration: duration, offset: -100,triggerHook: 0})
        .setTween(tween)
        // .addIndicators({name: "loop2"}) // add indicators (requires plugin)
        .addTo(controller);

})

