"use strict";

document.addEventListener('DOMContentLoaded', function () {
  $('select').niceSelect();
  $('html').imagesLoaded({
    background: true
  }, function () {
    $('body').removeClass('loading');
  });
});

function closeNav() {
  document.getElementById('mySidepanel').style.width = '0';
}

;

function pageWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

var schemeSvg = document.querySelector('.scheme-svg');
var totalPriceTag = document.querySelector('.price__total');
var cost = 650;
var totalPrice = 0;
schemeSvg.addEventListener("click", function (event) {
  if (!event.target.classList.contains('booked')) {
    event.target.classList.toggle('active');
    var totalSeats = schemeSvg.querySelectorAll('.active').length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
  }
});