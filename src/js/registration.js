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

  // Новая функция, убирающая <meta> с CSP
  function removeCSPMeta() {
    const cspMeta = document.querySelector(
      'meta[http-equiv="Content-Security-Policy"]'
    );
    if (cspMeta) {
      cspMeta.parentNode.removeChild(cspMeta);
    }
  }

  function openRegistrationModal() {
    // Вызываем функцию, чтобы убрать <meta> с CSP
    removeCSPMeta();

    fetch('/partials/registration.html')
      .then(response => response.text())
      .then(html => {
        const registrationModalContainer = document.getElementById(
          'registrationModalContainer'
        );
        appendHtmlToContainer(html, registrationModalContainer);

        const registrationForm = document.getElementById('registrationForm');
        const closeIcon = document.querySelector('.close-icon');

        registrationForm.addEventListener('submit', function (event) {
          event.preventDefault();

          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;

          if (name && email && password) {
            console.log(
              `User data: Name: ${name}, Email: ${email}, Password: ${password}`
            );

            const userData = { name, email, password };
            localStorage.setItem('userData', JSON.stringify(userData));

            closeRegistrationModal();
          } else {
            const missingFields = [];
            if (!name) missingFields.push('Name');
            if (!email) missingFields.push('Email');
            if (!password) missingFields.push('Password');

            errorMessageElement.textContent = `Please fill in the following fields: ${missingFields.join(
              ', '
            )}`;
            errorMessageElement.style.display = 'block';

            setTimeout(function () {
              errorMessageElement.style.display = 'none';
            }, 10000);
          }
        });

        closeIcon.addEventListener('click', function () {
          errorMessageElement.style.display = 'none';
          closeRegistrationModal();
        });
      })
      .catch(error =>
        console.error('Error loading registration content:', error)
      );
  }

  function appendHtmlToContainer(html, container) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    while (tempDiv.firstChild) {
      container.appendChild(tempDiv.firstChild);
    }
  }

  function closeRegistrationModal() {
    const registrationModalContainer = document.getElementById(
      'registrationModalContainer'
    );
    registrationModalContainer.innerHTML = '';
  }
});
