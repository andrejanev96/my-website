const signUpBtn = document.querySelector('#sign-up');

signUpBtn.addEventListener('click', updateBtn);

function updateBtn() {
    if (signUpBtn.textContent === 'Sign Up') {
        signUpBtn.textContent = "You're awesome for signing up!"
        signUpBtn.disabled= true;
    }
}
