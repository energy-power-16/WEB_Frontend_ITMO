'use strict';

let start = new Date;
console.log(+start);

(function () {
    window.addEventListener('load', function () {
        let end = new Date;
        console.log(+end);
        const loadTimeSpan = document.querySelector('.load-dur');
        if (loadTimeSpan) {
            loadTimeSpan.textContent = (end - start) / 1000;
        }
    });
})();

(function () {
    window.addEventListener('DOMContentLoaded', function () {
        makeMenuItemActive2();
        let end = new Date;
        const loadTimeSpan = document.querySelector('.dom-content-loaded-dur');
        if (loadTimeSpan) {
            loadTimeSpan.textContent = (end - start) / 1000;
        }
    });
})();

function makeMenuItemActive1() {
    let pageName = document.location.pathname;
    let elements = document.querySelectorAll('.header__link');
    for (const el of elements) {
        if (el.getAttribute('href') === '.' + pageName) {
            el.classList.add('header__link__active');
        }
    }
}

function makeMenuItemActive2() {
    let pageName = document.location.pathname;
    let el = document.querySelector(`.header__link[href=".${pageName}"]`);
    if (el) {
        el.classList.add('header__link__active');
    }
}
