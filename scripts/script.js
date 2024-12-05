'use strict';

(function() {
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
            makeMenuItemActive();
            let end = new Date;
            const loadTimeSpan = document.querySelector('.dom-content-loaded-dur');
            if (loadTimeSpan) {
                loadTimeSpan.textContent = (end - start) / 1000;
            }
        });
    })();
    
    function makeMenuItemActive() {
        const loc = document.location;
        let pageHref = loc.origin + loc.pathname;
        let elements = document.querySelectorAll('.header__link');
        for (const el of elements) {
            if (el.href === pageHref) {
                el.classList.add('header__link__active');
            }
        }
    }
})();
