const form = document.querySelector('form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const user = {
    emailInput: emailInput.value.trim(),
    passwordInput: passwordInput.value.trim(),
  };
  if (emailInput.value === '' || passwordInput.value === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(user);
  }
  form.reset();
});
