'use strict';

let start = new Date;

(function () {
    window.addEventListener('load', function () {
        let end = new Date;
        const loadTimeSpan = document.querySelector('.load-dur');
        if (loadTimeSpan) {
            loadTimeSpan.textContent = (end - start) / 1000;
        }
    });
})();

(function () {
    window.addEventListener('DOMContentLoaded', function () {
        let pageName = document.location.pathname;
        let elements = document.querySelectorAll('.header__link');
        if(pageName == '/index.html' || pageName == '/')
        {
            elements[0].classList.add('header__link__active');
        } else if(pageName == '/about.html'){
            elements[1].classList.add('header__link__active');
        } else if(pageName == '/prices.html'){
            elements[2].classList.add('header__link__active');
        }
        let end = new Date;
        const loadTimeSpan = document.querySelector('.dom-content-loaded-dur');
        if (loadTimeSpan) {
            loadTimeSpan.textContent = (end - start) / 1000;
        }
    });
})();
