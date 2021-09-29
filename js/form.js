// modal-form
const formRef = document.querySelector('.js-speaker-form');
const checkBoxRef = document.querySelector('.js-policy');
const submitBtnRef = document.querySelector('.js-submit');

formRef.addEventListener('submit', onSubmitForm);
checkBoxRef.addEventListener('change', onChangeCheckBox);

function onSubmitForm(event) {
  event.preventDefault();

  const formRef = event.target;
  const formData = new FormData(formRef);

  const submittedData = {};

  formData.forEach((value, key) => {
    submittedData[key] = value;
  });

  formRef.reset();
  onChangeCheckBox(event);

  console.log(submittedData); //сделать чтобы нельзя было отправлять пустую форму
}

function onChangeCheckBox(event) {
  const checked = event.target.checked;

  if (checked) {
    submitBtnRef.disabled = false;
    submitBtnRef.classList.remove('button--disabled');
  } else {
    submitBtnRef.disabled = true;
    submitBtnRef.classList.add('button--disabled');
  }
}

export { onSubmitForm, onChangeCheckBox };

//footer-form

const footerFormRef = document.querySelector('.footer-form');
const footerBtnRef = document.querySelector('.footer-button');

footerFormRef.addEventListener('submit', onSubmitFooterForm);

function onSubmitFooterForm(event) {
  event.preventDefault();

  const formRef = event.target;
  const formData = new FormData(formRef);

  const submittedData = {};

  formData.forEach((value, key) => {
    submittedData[key] = value;
  });

  formRef.reset();

  console.log(submittedData); //сделать чтобы нельзя было отправлять пустую форму
}
