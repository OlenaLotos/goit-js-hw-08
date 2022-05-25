import trottle from 'lodash.throttle'
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit),
refs.textarea.addEventListener('input', trottle(onTextareaInput, 500));
// refs.input.addEventListener('input', trottle(onInput, 500));

refs.form.addEventListener('input', event => {
    // console.log(event.target.name);
    // console.log(event.target.value);

    formData[event.target.name] = event.target.value;
    console.log(formData);
    // console.log( JSON.stringify(formData));
});

populateTextarea();
// populateInput();

function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
 };

function onTextareaInput(event) { 
    const message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message);
};

function populateTextarea() {
    // const savedEmail = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    
    if (savedMessage) {
        // console.log(savedMessage);
        refs.input.value = savedEmail.email;
        refs.textarea.value = savedEmail.message;           
    }
   
}

// function onInput(event) { 
//     const email = event.target.value;
//     localStorage.setItem(STORAGE_KEY, email);
// };

// function populateInput() {
//     const savedEmail = localStorage.getItem(STORAGE_KEY);
//     if (savedEmail) {
//         // console.log(savedEmail);
//         refs.input.value = savedEmail;
//     }
// }

