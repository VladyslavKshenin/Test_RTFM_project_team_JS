document.addEventListener('DOMContentLoaded', function () {
  const signupBtn = document.getElementById('signupBtn');
  signupBtn.addEventListener('click', openRegistrationModal);

  function openRegistrationModal() {
    // Fetch the content of registration.html
    fetch('./partials/registration.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.text();
      })
      .then(htmlContent => {
        // Inject the HTML content into the DOM
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = htmlContent;

        // Append the modal container to the body or another desired location
        document.body.appendChild(modalContainer);

        // Now, you can add additional logic to handle the opened modal
        console.log('Модальное окно регистрации открыто!');
      })
      .catch(error => {
        console.error('Error fetching registration.html:', error);
      });
  }
});
