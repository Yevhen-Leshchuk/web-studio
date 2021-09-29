'use strict';

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

  console.log(submittedData);
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
