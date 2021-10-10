import refs from './refs.js';
import { clearStylesInputForm } from './form.js';

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modal.addEventListener('click', onLightboxClick);

function onOpenModal(event) {
  event.preventDefault();

  refs.bodyRef.classList.add('modal-open', 'body_landscape--hidden');
  refs.htmlRef.classList.add('is-landscape');

  refs.modal.classList.remove('backdrop--hidden');

  window.addEventListener('keydown', onKeyPress);
}

function onCloseModal() {
  refs.modal.classList.add('backdrop--hidden');

  refs.bodyRef.classList.remove('modal-open', 'body_landscape--hidden');
  refs.htmlRef.classList.remove('is-landscape');

  window.removeEventListener('keydown', onKeyPress);

  formReset();
  clearStylesInputForm();
}

function onKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

function onLightboxClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

function formReset() {
  const formRef = refs.modalFormRef;
  formRef.reset();
}

export { onOpenModal, onCloseModal };
