import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

import { firebaseConfig } from './firebaseConfig.js';
document.addEventListener('DOMContentLoaded', function () {
  const signupBtn = document.getElementById('signupBtn');
  if (signupBtn) {
    signupBtn.addEventListener('click', openRegistrationModal);
  } else {
    console.error('Element with id "signupBtn" not found');
  }

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

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);

  async function openRegistrationModal() {
    try {
      const response = await fetch('../partials/registration.html');
      const html = await response.text();

      const registrationModalContainer = document.getElementById(
        'registrationModalContainer'
      );
      registrationModalContainer.innerHTML = html;

      const registrationForm = document.getElementById('registrationForm');
      const closeIcon = document.querySelector('.close-icon');

      registrationForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

          const userData = { name, email, uid: userCredential.user.uid };
          await setDoc(
            doc(firestore, 'users', userCredential.user.uid),
            userData
          );

          console.log('User data:', userData);

          closeRegistrationModal();
        } catch (error) {
          errorMessageElement.textContent = `Error creating user: ${error.message}`;
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
    } catch (error) {
      console.error('Error loading registration content:', error);
    }
  }

  function closeRegistrationModal() {
    const registrationModalContainer = document.getElementById(
      'registrationModalContainer'
    );
    registrationModalContainer.innerHTML = '';
  }
});
