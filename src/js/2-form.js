const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

fillTheForm();

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', handleFormlInput);

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  formData = {
    email: '',
    message: '',
  };

  form.reset();
}

function handleFormlInput(event) {
  const { name, value } = event.target;

  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Функціонал функуії по прикладу з відеоуроку від ментора( більш складнвший для мене)//

function fillTheForm() {
  const saveLSData = localStorage.getItem(STORAGE_KEY);

  if (!saveLSData) return;

  try {
    const dataFromLS = JSON.parse(saveLSData);
    const formEL = new FormData(form);
    const formFields = Array.from(formEL.keys());

    formFields.forEach(field => {
      form.elements[field].value = dataFromLS[field];
      formData[field] = dataFromLS[field];
    });
  } catch (error) {
    console.error('Error reading localStorage data', error);
  }
}

// Функціонал функуії більш простіший для мене)//

/* function fillTheForm() {
  const savedLSData = localStorage.getItem(STORAGE_KEY);

  if (!savedLSData) return; 

  try {
    const dataFromLS = JSON.parse(savedLSData);

    
    for (const field in dataFromLS) {
      if (dataFromLS.hasOwnProperty(field)) {
        form.elements[field].value = dataFromLS[field]; 
        formData[field] = dataFromLS[field]; 
      }
    }

  } catch (error) {
    console.error("Error reading localStorage data", error);
  }
} */
