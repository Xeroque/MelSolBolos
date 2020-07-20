 window.addEventListener("DOMContentLoaded", scrollLoop, false);

var orangeblob = document.querySelector('.orangeblob');
var floatingbread = document.querySelector('.floatingbread');
var floatingberries = document.querySelector('.floatingberries');
var floatingjar = document.querySelector('.floatingjar');
var floatingbox = document.querySelector('.floatingbox');
var xScrollPosition
var yScrollPosition

function scrollLoop(e){
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * -0.2, orangeblob);
    setTranslate(0, yScrollPosition * 0.5, floatingbread);
    setTranslate(0, yScrollPosition * -0.5, floatingberries);
    setTranslate(0, yScrollPosition * -0.5, floatingjar);
    setTranslate(0, yScrollPosition * -0.6, floatingbox);
    requestAnimationFrame(scrollLoop)
}

function setTranslate(xPos, yPos, el ){
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0";
}