import refs from "./refs.js";
const { addTodoButton, addTodoSubmitButton} = refs;
const todoLightBox = document.querySelector('.todo__lightbox');
const buttonModalClose = document.querySelector('.todo__modal--close');
const body = document.querySelector('body');

addTodoButton.addEventListener('click', onTodoModalOpen);
//addTodoSubmitButton.addEventListener('click', onTodoModalClose);

function onTodoModalOpen() {
    todoLightBox.classList.remove('is-hidden');
    body.classList.add('modal-open')

    buttonModalClose.addEventListener('click', onTodoModalClose);
    todoLightBox.addEventListener('click', evt => {
        if (evt.target.classList.contains('todo__lightbox')) {
        onTodoModalClose();
        }
    });

    window.addEventListener('keydown', evt => {
        if (evt.code === 'Escape') {
            onTodoModalClose();
            }
        });
}

export function onTodoModalClose() {
  buttonModalClose.removeEventListener('click', onTodoModalClose);
  todoLightBox.removeEventListener('click', evt => {
    if (evt.target.classList.contains('todo__lightbox')) {
      onTodoModalClose();
    }
  });
  window.removeEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      onTodoModalClose();
    }
  });

  todoLightBox.classList.add('is-hidden');
  body.classList.remove('modal-open');
}