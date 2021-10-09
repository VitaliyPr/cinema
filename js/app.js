"use strict";

document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
  $('select').niceSelect();
  $('html').imagesLoaded({
    background: true
  }, function () {
    $('body').removeClass('loading');
  });
});

function openNav() {
  if ($(window).width() < 767.98) {
    document.getElementById('mySidepanel').style.width = '100%';
  } else {
    document.getElementById('mySidepanel').style.width = '100vw';
  }

  ;
}

;

function closeNav() {
  document.getElementById('mySidepanel').style.width = '0';
}

;

function pageWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}