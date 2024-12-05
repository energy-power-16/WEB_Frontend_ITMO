'use strict';

(function() {
  document.addEventListener('DOMContentLoaded', start);

  function start() {
    const btns = document.querySelectorAll('.catalog__button');

    for (const btn of btns) {
      btn.addEventListener('click', btnCatalogClick);
    }
  }

  function btnCatalogClick() {
    vex.dialog.open({
      message: 'Enter your username and password:',
      input: [
        '<input name="username" type="text" placeholder="Username" required />',
        '<input name="password" type="password" placeholder="Password" required />'
      ].join(''),
      buttons: [
        $.extend({}, vex.dialog.buttons.YES, { text: 'Login' }),
        $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
      ],
      callback: function (data) {
        if (!data) {
          console.log('Cancelled')
        } else {
          console.log('Username', data.username, 'Password', data.password)
        }
      }
    })
  }
})();
