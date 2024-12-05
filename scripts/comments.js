'use strict';

(function(){
  document.addEventListener('DOMContentLoaded', start);

  function start() {
    const btn = document.querySelector('.btn-load-comments');
    btn.addEventListener('click', btnLoadClick);
  }

  function btnLoadClick() {
    // Зададим вместо текста для кнопки "OK" текст "Конечно"
    vex.dialog.buttons.YES.text = 'Конечно';

    // Зададим вместо текста для кнопки "Cancel" текст "Ни в коем разе"
    vex.dialog.buttons.NO.text = 'Ни в коем разе';

    // Меняем стиль модальных окон на более подходящий для этого сайта
    vex.defaultOptions.className = 'vex-theme-flat-attack';


    // confirm открывает модальное окно с 2мя кнопками:
    // OK и Cancel.
    // В качестве параметра передаём объект со следующими свойствами:
    // message: какой текст отобразить в модальном окне,
    // callback: какую функцию вызвать после того, как пользователь
    // нажмёт OK.
    vex.dialog.confirm({
      message: 'Вы точно желаете загрузить данные по сети?',
      callback: function (value) {
        if (value) {
          loadComments();
        }
      }
    })
  }
  
  async function loadComments() {
    const loader = document.querySelector('.loader');
    const erDiv = document.querySelector('.comments-error');
    const commentsListEl = document.querySelector('.comments-list');
    erDiv.textContent = '';
    loader.classList.remove('none');
    commentsListEl.classList.add('none');
    erDiv.classList.add('none');
    commentsListEl.innerHTML = '';
    let comments;
    try {
      const postId = Math.floor(Math.random() * 100) + 1;
      const resp = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      comments = await resp.json();
      // alert отображает модальное окно с тестом,
      // указанным в качестве аргумента
      vex.dialog.alert(`Данные успешно загружены для post id = ${postId}`);
    } catch (er) {
      erDiv.textContent = `Ошибка: ${er.message}`;
      erDiv.classList.remove('none');
      loader.classList.add('none');
      return;
    }
    loader.classList.add('none');
    commentsListEl.classList.remove('none');
    for (const comment of comments) {
      const commentElem = document.createElement('div');
      commentElem.classList.add('comment');
      const themeEl = document.createElement('div');
      const textEl = document.createElement('div');
      const authorEl = document.createElement('div');
      themeEl.classList.add('comment-theme');
      textEl.classList.add('comment-text');
      authorEl.classList.add('comment-author');
      themeEl.textContent = comment.name;
      textEl.textContent = comment.body;
      authorEl.textContent = comment.email;
      commentElem.append(themeEl, textEl, authorEl);
      commentsListEl.append(commentElem);
    }
  }
})()