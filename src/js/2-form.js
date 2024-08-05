const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(LS_KEY)) || {
  email: '',
  message: '',
};

const { email, message } = form.elements;
email.value = formData.email;
message.value = formData.message;

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

function onInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function onSubmit(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;
  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem(LS_KEY);
  event.currentTarget.reset();
  formData.email = '';
  formData.message = '';
}
