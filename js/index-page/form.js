const refs = {
  modalFormRef: document.querySelector('.js-speaker-form'),
  modalInputNameRef: document.querySelector('.js-input__name'),
  modalInputTelRef: document.querySelector('.js-input__tel'),
  modalInputMailRef: document.querySelector('.js-input__mail'),
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

//----------------------modal-form----------------------------------

refs.modalFormRef.addEventListener('submit', onSubmitForm);
refs.checkBoxRef.addEventListener('change', onChangeCheckBox);
refs.modalFormRef.addEventListener('input', handleInputModal);

function handleInputModal(e) {
  e.preventDefault();
  const formRef = e.target.value;

  if (formRef) {
    refs.modalInputNameRef.classList.remove('.form-field__input--no-input');
    refs.modalInputIconNameRef.classList.remove('form-field__icon--no-input');

    refs.modalInputTelRef.classList.remove('.form-field__input--no-input');
    refs.modalInputIconTelRef.classList.remove('form-field__icon--no-input');

    refs.modalInputMailRef.classList.remove('.form-field__input--no-input');
    refs.modalInputIconMailRef.classList.remove('form-field__icon--no-input');
  }
}

function onSubmitForm(event) {
  event.preventDefault();

  const formRef = event.target;
  const formData = new FormData(formRef);
  const inputName = event.target.name.value;
  const inputTel = event.target.tel.value;
  const inputMail = event.target.mail.value;
  const submittedData = {};

  formData.forEach((value, key) => {
    submittedData[key] = value;
  });

  console.log(submittedData);

  checkInput(submittedData);

  if (inputName && inputTel && inputMail) {
    formRef.reset();
    refs.submitBtnRef.disabled = true;
    refs.submitBtnRef.classList.add('button--disabled');
  }
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
      refs.modalInputNameRef.placeholder = 'Введите имя!';
      refs.modalInputNameRef.classList.add(
        'form-field__input--active',
        '.form-field__input--no-input',
      );
      refs.modalLabelNameRef.classList.add('form-field__label--hidden');
      refs.modalInputIconNameRef.classList.add('form-field__icon--no-input');

      refs.modalInputTelRef.placeholder = 'Введите номер телефона!';
      refs.modalInputTelRef.classList.add(
        'form-field__input--active',
        '.form-field__input--no-input',
      );
      refs.modalLabelTelRef.classList.add('form-field__label--hidden');
      refs.modalInputIconTelRef.classList.add('form-field__icon--no-input');

      refs.modalInputMailRef.placeholder = 'Введите email!';
      refs.modalInputMailRef.classList.add(
        'form-field__input--active',
        '.form-field__input--no-input',
      );
      refs.modalLabelMailRef.classList.add('form-field__label--hidden');
      refs.modalInputIconMailRef.classList.add('form-field__icon--no-input');

      break;
    case name === '':
      {
        // console.log('name');
        refs.modalInputNameRef.placeholder = 'Введите имя!';
        refs.modalInputNameRef.classList.add(
          'form-field__input--active',
          '.form-field__input--no-input',
        );
        refs.modalLabelNameRef.classList.add('form-field__label--hidden');
        refs.modalInputIconNameRef.classList.add('form-field__icon--no-input');
      }

      break;
    case tel === '':
      // console.log('tel');
      refs.modalInputTelRef.placeholder = 'Введите номер телефона!';
      refs.modalInputTelRef.classList.add(
        'form-field__input--active',
        '.form-field__input--no-input',
      );
      refs.modalLabelTelRef.classList.add('form-field__label--hidden');
      refs.modalInputIconTelRef.classList.add('form-field__icon--no-input');

      break;
    case mail === '':
      // console.log('mail');
      refs.modalInputMailRef.placeholder = 'Введите email!';
      refs.modalInputMailRef.classList.add(
        'form-field__input--active',
        '.form-field__input--no-input',
      );
      refs.modalLabelMailRef.classList.add('form-field__label--hidden');
      refs.modalInputIconMailRef.classList.add('form-field__icon--no-input');

      break;

    default:
      // console.log('Default');
      refs.modalInputNameRef.placeholder = ' ';
      refs.modalInputNameRef.classList.remove(
        'form-field__input--active',
        '.form-field__input--no-input',
      );
      refs.modalLabelNameRef.classList.remove('form-field__label--hidden');
      refs.modalInputIconNameRef.classList.remove('form-field__icon--no-input');

      refs.modalInputTelRef.placeholder = ' ';
      refs.modalInputTelRef.classList.remove(
        'form-field__input--active',
        '.form-field__input--no-input',
      );
      refs.modalLabelTelRef.classList.remove('form-field__label--hidden');
      refs.modalInputIconTelRef.classList.remove('form-field__icon--no-input');

      refs.modalInputMailRef.placeholder = ' ';
      refs.modalInputMailRef.classList.remove(
        'form-field__input--active',
        '.form-field__input--no-input',
      );
      refs.modalLabelMailRef.classList.remove('form-field__label--hidden');
      refs.modalInputIconMailRef.classList.remove('form-field__icon--no-input');
  }
}

//----------------------footer-form--------------------------------------

refs.footerFormRef.addEventListener('submit', onSubmitFooterForm);
refs.footerFormRef.addEventListener('input', handleInputFooter);

function handleInputFooter(e) {
  e.preventDefault();
  const formRef = e.target.value;
  if (formRef) {
    refs.footerInputRef.classList.remove(
      'footer-field__input--active',
      'footer-field__input--no-input',
    );
  }
}

function onSubmitFooterForm(event) {
  event.preventDefault();

  if (!event.target.elements.mail.value) {
    refs.footerInputRef.placeholder = 'Введите email!';
    refs.footerInputRef.classList.add(
      'footer-field__input--active',
      'footer-field__input--no-input',
    );
  } else {
    refs.footerInputRef.placeholder = 'E-mail';
    refs.footerInputRef.classList.remove(
      'footer-field__input--active',
      'footer-field__input--no-input',
    );
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
