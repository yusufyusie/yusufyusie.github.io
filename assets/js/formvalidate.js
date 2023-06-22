const form = document.querySelector('.form-input');
const email = document.getElementById('email');
form.addEventListener('submit', (event) => {
    const errorMsgElement = document.querySelector('.error_msg');
    const errorMsg = 'Email should be in lower case.';
    event.preventDefault();
    const reg = /[A-Z]/;
    if (!reg.test(email.value))
        {
            form.submit();
        } else {

            errorMsgElement.innerHTML = errorMsg; 
        }      
  });
  



