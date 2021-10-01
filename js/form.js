const refs = {
  modalFormRef: document.querySelector('.js-speaker-form'),
  modalInputNameRef: document.querySelector('.name'),
  modalInputTelRef: document.querySelector('.tel'),
  modalInputMailRef: document.querySelector('.mail'),
  modalLabelNameRef: document.querySelector('.form-field__label--name'),
  modalLabelTelRef: document.querySelector('.form-field__label--tel'),
  modalLabelMailRef: document.querySelector('.form-field__label--mail'),
  modalInputIconNameRef: document.querySelector('.form-field__icon--name'),
  modalInputIconTelRef: document.querySelector('.form-field__icon--tel'),
  modalInputIconMailRef: document.querySelector('.form-field__icon--mail'),
  checkBoxRef: document.querySelector('.js-policy'),
  submitBtnRef: document.querySelector('.js-submit'),
  footerInputRef: document.querySelector('.footer-field__input'),
  footerFormRef: document.querySelector('.footer-form'),
};

//----------------modal-form
refs.modalFormRef.addEventListener('submit', onSubmitForm);
refs.checkBoxRef.addEventListener('change', onChangeCheckBox);

function onSubmitForm(event) {
  event.preventDefault();
  console.log(event);
  const formRef = event.target;
  const formData = new FormData(formRef);

  const submittedData = {};

  formData.forEach((value, key) => {
    submittedData[key] = value;
  });

  refs.submitBtnRef.disabled = true;
  refs.submitBtnRef.classList.add('button--disabled');

  const { name, tel, mail } = submittedData;

  console.log(submittedData);

  checkInput(submittedData);
  formRef.reset();
}

function onChangeCheckBox(event) {
  const checked = event.target.checked;

  if (checked) {
    refs.submitBtnRef.disabled = false;
    refs.submitBtnRef.classList.remove('button--disabled');
  } else {
    refs.submitBtnRef.disabled = true;
    refs.submitBtnRef.classList.add('button--disabled');
  }
}

function checkInput({ name, tel, mail }) {
  switch (true) {
    case name === '' && tel === '' && mail === '':
      refs.modalInputNameRef.placeholder = 'Введите данные!';
      refs.modalInputNameRef.classList.add('active', 'no-input');
      refs.modalLabelNameRef.classList.add('label-hidden');
      refs.modalInputIconNameRef.classList.add('form-field__icon-no-input');

      refs.modalInputTelRef.placeholder = 'Введите данные!';
      refs.modalInputTelRef.classList.add('active', 'no-input');
      refs.modalLabelTelRef.classList.add('label-hidden');
      refs.modalInputIconTelRef.classList.add('form-field__icon-no-input');

      refs.modalInputMailRef.placeholder = 'Введите данные!';
      refs.modalInputMailRef.classList.add('active', 'no-input');
      refs.modalLabelMailRef.classList.add('label-hidden');
      refs.modalInputIconMailRef.classList.add('form-field__icon-no-input');

      break;
    case name === '':
      {
        // console.log('name');
        refs.modalInputNameRef.placeholder = 'Введите данные!';
        refs.modalInputNameRef.classList.add('active', 'no-input');
        refs.modalLabelNameRef.classList.add('label-hidden');
        refs.modalInputIconNameRef.classList.add('form-field__icon-no-input');
      }

      break;
    case tel === '':
      // console.log('tel');
      refs.modalInputTelRef.placeholder = 'Введите данные!';
      refs.modalInputTelRef.classList.add('active', 'no-input');
      refs.modalLabelTelRef.classList.add('label-hidden');
      refs.modalInputIconTelRef.classList.add('form-field__icon-no-input');

      break;
    case mail === '':
      // console.log('mail');
      refs.modalInputMailRef.placeholder = 'Введите данные!';
      refs.modalInputMailRef.classList.add('active', 'no-input');
      refs.modalLabelMailRef.classList.add('label-hidden');
      refs.modalInputIconMailRef.classList.add('form-field__icon-no-input');

      break;

    default:
      // console.log('Default');
      refs.modalInputNameRef.placeholder = ' ';
      refs.modalInputNameRef.classList.remove('active', 'no-input');
      refs.modalLabelNameRef.classList.remove('label-hidden');
      refs.modalInputIconNameRef.classList.remove('form-field__icon-no-input');

      refs.modalInputTelRef.placeholder = ' ';
      refs.modalInputTelRef.classList.remove('active', 'no-input');
      refs.modalLabelTelRef.classList.remove('label-hidden');
      refs.modalInputIconTelRef.classList.remove('form-field__icon-no-input');

      refs.modalInputMailRef.placeholder = ' ';
      refs.modalInputMailRef.classList.remove('active', 'no-input');
      refs.modalLabelMailRef.classList.remove('label-hidden');
      refs.modalInputIconMailRef.classList.remove('form-field__icon-no-input');
  }
}

//-------------footer-form

refs.footerFormRef.addEventListener('submit', onSubmitFooterForm);

function onSubmitFooterForm(event) {
  event.preventDefault();

  if (!event.target.elements.mail.value) {
    refs.footerInputRef.placeholder = 'Введите данные!';
    refs.footerInputRef.classList.add('active', 'no-input');
  } else {
    refs.footerInputRef.placeholder = 'E-mail';
    refs.footerInputRef.classList.remove('active', 'no-input');
  }

  const formRef = event.target;
  const formData = new FormData(formRef);

  const submittedData = {};

  formData.forEach((value, key) => {
    submittedData[key] = value;
  });

  formRef.reset();

  console.log(submittedData);
}

export default (onSubmitForm, onSubmitFooterForm);
