const form = document.getElementById('#contact_form');

form.addEventListener('submit', (e) => {
    const email = document.getElementById('email').value;
    const errorMsgElement = document.querySelector('.error_msg');
    const errorMsg = 'Email should be in lower case.';
    e.preventDefault();
    const regex = /[A-Z]/;
    if (!regex.test(email.value)) {
      form.submit();
    } else {
        errorMsgElement.innerHTML = errorMsg;
    }
  });
  




