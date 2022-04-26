let signUpButton = document.getElementById('sign-up');
signUpButton.addEventListener('click', function(){
    let modalContSignUp = document.getElementById('modal-container-sign-up');
    modalContSignUp.classList.add('show');
    const teachersData = {};
    teachersData.firstame = document.getElementById('first_name').value;
    teachersData.lastname = document.getElementById('last_name').value;
    teachersData.email = document.getElementById('e_mail').value;
    teachersData.password = document.getElementById('password').value;
    teachersData.confirm = document.getElementById('password_confirm').value;
    console.log('Teacers', teachersData);
})
let signInButton = document.getElementById('sign-in');
signInButton.addEventListener('click', function(){
    let modalContSignIn = document.getElementById('modal-container-sign-in');
    modalContSignIn.classList.add('show');
    const teachersSignInData = {};
    teachersSignInData.email = document.getElementById('eMail').value;
    teachersSignInData.password = document.getElementById('pword').value;
    console.log('Teacers sign in data', teachersSignInData);
})
// let closeUpButton = document.getElementById('close-up');
// closeUpButton.addEventListener('click', function(){
//     let modalContCloseSignUp = document.getElementById('modal-container-sign-up');
//     modalContCloseSignUp.classList.remove('show');
// })
// let closeInButton = document.getElementById('close-in');
// closeInButton.addEventListener('click', function(){
//     let modalContCloseSignIn = document.getElementById('modal-container-sign-up');
//     modalContCloseSignIn.classList.remove('show');
// })