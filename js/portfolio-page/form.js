const refs = {
  footerInputRef: document.querySelector('.footer-field__input'),
  footerFormRef: document.querySelector('.footer-form'),
};

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

export default onSubmitFooterForm;
