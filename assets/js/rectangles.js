
window.dots = document.getElementsByClassName('rect');

window.setInterval(function(){
    var total = window.dots.length;
    var white = Math.round(Math.random()*2)+3;
    var rand = 0;
    for(i = 0; i < total; i++) {
        window.dots[i].classList.remove('wht');
        window.dots[i].classList.remove('wht');
    }
    for(cnt = 0; cnt < white; cnt++) {
        rand = Math.round(Math.random()*(total-1));
        window.dots[rand].classList.add('wht');
    }
}, 500);