const formRef = document.querySelector('.feedback-form');
const submitRef = document.querySelector('button[type="submit"]');

formRef.addEventListener('input', onFormInput);
formRef.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'form-data';

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
  localStorage.removeItem(STORAGE_KEY);
}

function populateUserData() {
  const savedData = localStorage.getItem('STORAGE_KEY');
  const parsedSavedData = JSON.parse(savedData);
  if (savedData) {
    console.log(parsedSavedData);
    formRef.value = parsedSavedData;
  }
}
