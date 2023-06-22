const form = document.querySelector('.form-input');
const [fullName, firstName, lastName, email, textArea] = form.elements;

const mediaqueryList = window.matchMedia('(max-width: 768px)');

const screenTest = (e) => {
    if (e.matches) {
      fullName.required = true;
      firstName.required = false;
      lastName.required = false;
    } else {
      fullName.removeAttribute('required');
      firstName.required = true;
      lastName.required = true;
    }
  };

