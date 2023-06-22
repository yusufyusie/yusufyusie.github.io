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

  
screenTest(mediaqueryList);

mediaqueryList.addListener(screenTest);

let inputData = {};
if (localStorage.savedForm) {
  inputData = JSON.parse(localStorage.getItem('savedForm'));
}

fullName.addEventListener('change', () => {
  inputData.fullName = fullName.value;
});

firstName.addEventListener('change', () => {
  inputData.firstName = firstName.value;
});

lastName.addEventListener('change', () => {
  inputData.lastName = lastName.value;
});

email.addEventListener('change', () => {
  inputData.email = email.value;
});

textArea.addEventListener('change', () => {
  inputData.textArea = textArea.value;
});

const fillDataInput = () => {
  if (inputData.fullName) {
    fullName.value = inputData.fullName;
  }
  if (inputData.firstName) {
    firstName.value = inputData.firstName;
  }
  if (inputData.lastName) {
    lastName.value = inputData.lastName;
  }
  if (inputData.email) {
    email.value = inputData.email;
  }
  if (inputData.textArea) {
    textArea.value = inputData.textArea;
  }
};
