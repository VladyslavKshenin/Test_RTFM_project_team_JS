document.addEventListener('DOMContentLoaded', function () {
  const signupBtn = document.getElementById('signupBtn');
  signupBtn.addEventListener('click', openRegistrationModal);

  function openRegistrationModal() {
    fetch('./partials/registration.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.text();
      })
      .then(htmlContent => {
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = htmlContent;

        document.body.appendChild(modalContainer);

        console.log('Модальное окно регистрации открыто!');
      })
      .catch(error => {
        console.error('Error fetching registration.html:', error);
      });
  }
});
