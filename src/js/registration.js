document.addEventListener('DOMContentLoaded', function () {
  const signupBtn = document.getElementById('signupBtn');
  signupBtn.addEventListener('click', openRegistrationModal);

  const errorMessageElement = document.createElement('div');
  errorMessageElement.style.position = 'fixed';
  errorMessageElement.style.top = '20px';
  errorMessageElement.style.right = '20px';
  errorMessageElement.style.background = 'red';
  errorMessageElement.style.color = 'white';
  errorMessageElement.style.padding = '15px';
  errorMessageElement.style.display = 'none';
  errorMessageElement.style.zIndex = '1';

  document.body.appendChild(errorMessageElement);

  function openRegistrationModal() {
    fetch('/partials/registration.html')
      .then(response => response.text())
      .then(html => {
        const registrationModalContainer = document.getElementById(
          'registrationModalContainer'
        );
        registrationModalContainer.innerHTML = html;

        const registrationForm = document.getElementById('registrationForm');
        const closeIcon = document.querySelector('.close-icon');


        closeIcon.addEventListener('click', function () {
          errorMessageElement.style.display = 'none';
          closeRegistrationModal();
        });
      });
  }
});
