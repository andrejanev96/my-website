const signUpBtn = document.querySelector('#sign-up');

signUpBtn.addEventListener('click', updateBtn);
signUpBtn.addEventListener('click', greet);

function updateBtn() {
    if (signUpBtn.textContent === 'Sign Up') {
        signUpBtn.textContent = "You're awesome for signing up!"
        signUpBtn.disabled= true;
    }
}

function greet() {
    const name = prompt("What's your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, thank you for subscribing to our website!`
}