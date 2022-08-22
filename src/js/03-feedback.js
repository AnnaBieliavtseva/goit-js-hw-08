import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input[type="email"]');
const messageRef = document.querySelector('textarea[name="message"]');

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

populateUserData();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  if (emailRef.value && messageRef.value) {
    event.preventDefault();
    event.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
  } else {
    alert('Заполните, пожалуйста, все поля');
  }
  console.log(formData);
}

function populateUserData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedSavedData = JSON.parse(savedData);
  if (savedData) {
    emailRef.value = parsedSavedData.email || '';
    messageRef.value = parsedSavedData.message || '';
  }
  console.log(parsedSavedData);
}
