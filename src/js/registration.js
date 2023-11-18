document.getElementById('signupBtn').addEventListener('click', function () {
  document.querySelector('.registration-modal').style.display = 'flex';
});

document.querySelector('.close-icon').addEventListener('click', function () {
  document.querySelector('.registration-modal').style.display = 'none';
});
