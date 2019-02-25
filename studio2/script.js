'use strict';
console.log('reading js');

var rectangle = document.querySelector('#rectangle');
var overlay = document.querySelector('#overlay');

rectangle.addEventListener('click', function() {
  overlay.style.display = 'block';
}, false);

AOS.init({
  duration: 2000,
})
