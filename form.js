const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const check = document.getElementById('check');
const button = document.getElementById('button');



form.addEventListener('submit', e => {
    e.preventDefault();

  checkInputs();

});


function checkInputs() {
    //Ovdje pravimo nove konstante koje sadrze vrijednosti Inputa
    //trim uklanja white space from string, tako da u inputu ne mozemo koristiti space
    const usernameValue = username.value.trim(); 
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const checkValue = check.value.trim();

    if(usernameValue === '') {
        //prikazi error message
        //dodaj error classu
        setErrorFor(username, 'Username required') // dodjeljujemo novu klasu koja ce prikazati ako dodje do errora
    }
    else {
        //add success class
        setSuccessFor(username)
    }

    if(emailValue === '') {
        setErrorFor(email, 'E-mail required');
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, 'E-mail is not valid');
    }
    else {
        setSuccessFor(email);
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Password required');
        setErrorFor(check, '');
    }
    else if (passwordValue.length < 6) {
        setErrorFor(password, 'Password must have minimum 6 characters')
        setErrorFor(check, '');
    }
    else if (passwordValue !== checkValue) {
           setErrorFor(password,'');
           setErrorFor(check,'Wrong check password');
    }
    else {
        setSuccessFor(password);
        setSuccessFor(check);
        return document.location.href = 'index.html';
    }



}


function setErrorFor(input, message) {
    const formControl = input.parentElement //parentElement u ovom slucaju to je .form-control klasa
    const small = formControl.querySelector('small');

    //dodaj error message unutar smalla
    small.innerText = message;

    //dodaj error klasu 
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}