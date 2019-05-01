'use strict';
console.log('reading js');

AOS.init({
  duration: 2000,
})


;(function() {
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
})();

var motifone = document.getElementById("motifone"),
rightgear = document.getElementById("motiftwo");

// to use the script *without* anti-jank, set the event to "scroll" and remove the anonymous function.

window.addEventListener("optimizedScroll", function() {
    motifone.style.transform = "rotate("+window.pageYOffset+"deg)";
    motiftwo.style.transform = "rotate(-"+window.pageYOffset+"deg)";
      motifthree.style.transform = "rotate(-"+window.pageYOffset+"deg)";
});

// var images = document.getElementsByClassName('b1');
// var instances = new simpleParallax(images);
