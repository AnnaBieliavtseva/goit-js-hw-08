import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input[type="email"]');
const messageRef = document.querySelector('[name="message"]');

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

populateUserData();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  console.log(formData);

  localStorage.setItem('STORAGE_KEY', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('STORAGE_KEY');
}

function populateUserData() {
  const savedData = localStorage.getItem('STORAGE_KEY');
  const parsedSavedData = JSON.parse(savedData);
  if (parsedSavedData) {
    console.log(parsedSavedData);
    emailRef.value = parsedSavedData.email;
    messageRef.value = parsedSavedData.message;
  }
}
