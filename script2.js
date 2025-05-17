document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const errors = form.querySelectorAll('.error');
  errors.forEach(el => el.textContent = ''); 

  let hasError = false;

  const firstName = form.firstName;
  const lastName = form.lastName;
  const email = form.email;
  const password = form.password;
  const reason = form.reason;
  const sex = form.querySelector('input[name="sex"]:checked');

  if (firstName.value.trim() === '') {
    firstName.nextElementSibling.textContent = 'Required';
    hasError = true;
  }

  if (lastName.value.trim() === '') {
    lastName.nextElementSibling.textContent = 'Required';
    hasError = true;
  }

  const sexError = document.getElementById('sexError');
  if (!sex) {
    sexError.textContent = 'Required';
    hasError = true;
  }

  if (email.value.trim() === '') {
    email.nextElementSibling.textContent = 'Required';
    hasError = true;
  }

  if (password.value.trim() === '') {
    password.nextElementSibling.textContent = 'Required';
    hasError = true;
  }

  if (reason.value.trim() === '') {
    reason.nextElementSibling.textContent = 'Required';
    hasError = true;
  }

  window.onload = function () {
  document.getElementById('firstName').textContent = localStorage.getItem('firstName') || '';
  document.getElementById('lastName').textContent = localStorage.getItem('lastName') || '';
  document.getElementById('email').textContent = localStorage.getItem('email') || '';
  document.getElementById('sex').textContent = localStorage.getItem('sex') || '';
  document.getElementById('reason').textContent = localStorage.getItem('reason') || '';
};

  if (!hasError) {
    localStorage.setItem('firstName', firstName.value.trim());
    localStorage.setItem('lastName', lastName.value.trim());
    localStorage.setItem('email', email.value.trim());
    localStorage.setItem('sex', sex.value);
    localStorage.setItem('reason', reason.value.trim());

    window.location.href = 'profile.html';
  }
});
