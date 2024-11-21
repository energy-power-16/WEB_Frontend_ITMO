'use strict';

(function(){
  document.addEventListener('DOMContentLoaded', start);

  function start() {
    const btn = document.querySelector('.btn-load-comments');
    btn.addEventListener('click', btnLoadClick);
  }

  function btnLoadClick(){
    vex.dialog.confirm({
      message: 'Вы точно желаете загрузить данные по сети?',
      callback: function (value)
      {
          if (value){
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
      vex.dialog.alert(`Данные успешно загружены для post id = ${postId}`)
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