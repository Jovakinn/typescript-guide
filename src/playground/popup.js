const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const username = form.username.value;


    if(usernamePattern.test(username)) {
        // feedback good info
        feedback.textContent = 'that username is valid!';
    } else {
        // feedback
        feedback.textContent = 'username must contains letters only and be 6 - 12 length!'
    }
});

button.addEventListener('click',() => {
    popup.style.display = 'block';
});

button.addEventListener('click',() => {
    popup.style.display = 'none';
});

form.username.addEventListener('keyup', e => {
    if (usernamePattern.test(e.target.value)) {
        console.log('passed');
    } else {
        console.log('failed');
    }
});
