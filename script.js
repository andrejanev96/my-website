const signUpBtn = document.querySelector('#sign-up');

signUpBtn.addEventListener('click', updateBtn);

function updateBtn() {
    if (signUpBtn.textContent === 'Sign Up') {
        signUpBtn.textContent = 'You have successfully signed up!'
    }
    else {
        signUpBtn.textContent = 'Start machine';
    }
}
