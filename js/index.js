let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
let menu = document.querySelector('.menu')

toggle.addEventListener('click', function () {
    body.classList.toggle('open');
    menu.classList.toggle('active-menu');
})


const form = document.getElementById('form')
const prenom = document.getElementById('prenom')
const nom = document.getElementById('nom')
const email = document.getElementById('email')
const date = document.getElementById('date')
const particip = document.getElementById('particip')
const conditionChecked = document.getElementById('conditionChecked');
const userCondition = document.getElementById('userCondition');
const formContent = document.getElementById('form-content');
const formSuccess = document.getElementById('form-success');
const closeSuccess = document.getElementById('closeSuccess');
// Get the modal
var modal = document.getElementById('login-modal');
var loginShow = document.getElementById('login-show');
var toggleLoginTimes = document.getElementById('toggle-login-times');
var loginSndShow = document.getElementById('loginSndShow');

/*var elementQuery = document.querySelector(".inscription #form")

let mediaQuery = window.matchMedia("(max-width: 560px)")
let mediaQuery2 = window.matchMedia("(max-width: 480px)")*/
let inputControl = document.querySelectorAll('.form-group');
let inputControlError = document.querySelectorAll('.input-control .error');
let prenomControl = document.querySelector('#prenomControl');
let nomControl = document.querySelector('#nomControl');
let emailControl = document.querySelector('#emailControl');
let dateControl = document.querySelector('#dateControl');
let participControl = document.querySelector('#participControl');

let prenomError = document.querySelector('#prenomError');
let nomError = document.querySelector('#nomError');
let emailError = document.querySelector('#emailError');
let dateError = document.querySelector('#dateError');
let participError = document.querySelector('#participError');

function prenomFunction() {
    let prenomValue = prenom.value.trim();
    if (prenomValue === "") {
        prenomControl.classList.remove('error');
        setError(prenom, 'Le prénom est requis');
    } else if (!prenomValue.match(letters)) {
        setError(prenom, 'Entrer des lettres. les chiffres ne sont pas autorisés');
    } else if (prenomValue.length < 3) {
        setError(prenom, 'Vous devez entrer au moins 3 charactères');
    } else {
        prenom.value = prenom.value.replace(/^.{1}/g, prenom.value[0].toUpperCase());
        setSuccess(prenom)
    }
}

function nomFunction() {
    let nomValue = nom.value.trim();
    if (nomValue === "") {
        setError2(nom, 'Le nom est requis');
    } else if (!nomValue.match(letters)) {
        setError2(nom, 'Entrer des lettres. les chiffres ne sont pas autorisés');
    } else if (nomValue.length < 3) {
        setError2(nom, 'Vous devez entrer au moins 3 charactères');
    } else {
        nom.value = nom.value.toUpperCase();
        setSuccess2(nom)
    }
}

function emailFunction() {
    const emailN = email.value.trim();
    if (emailN === "") {
        emailError.classList.remove('blackError');
        emailControl.classList.remove('black');
        setError(email, 'L\'e-mail est requis')
    } else if (!isValidEmail(emailN)) {
        emailError.classList.remove('blackError');
        emailControl.classList.remove('black');
        setError(email, 'Adresse Email Invalide')
    } else {
        emailError.classList.remove('blackError');
        emailControl.classList.remove('black');
        setSuccess(email)
    }
}

function numberValideFunction() {
    let numberValue = particip.value
    if (numberValue === "") {
        participError.classList.remove('blackError');
        participControl.classList.remove('black');
        setError(particip, "Ce champ est réquise")
    } else {
        setSuccess(particip);
    }
    if (isNaN(numberValue)) {
        participError.classList.remove('blackError');
        participControl.classList.remove('black');
        setError(particip, "Entrer que des nombres");
    } else if (numberValue === "" || numberValue === undefined) {
        participError.classList.remove('blackError');
        participControl.classList.remove('black');
        setError(particip, "Ce champ requis");
    } else {
        participError.classList.remove('blackError');
        participControl.classList.remove('black');
        setSuccess(particip)
    }
}

closeSuccess.addEventListener('click', () => {
    modal.style.display = "none"
    window.location.reload()
})


form.addEventListener('submit', e => {
    e.preventDefault();
    valideInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

}

const setError2 = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error2')

    errorDisplay.innerText = message;
    inputControl.classList.add('error2');
    inputControl.classList.remove('success2')

}

function displaySuccessMessage() {
    formContent.style.display = "none"
    formSuccess.style.display = "flex"
}

const setSuccess = element => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ' ';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}

const setSuccess2 = element => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error2')

    errorDisplay.innerText = ' ';
    inputControl.classList.add('success2');
    inputControl.classList.remove('error2')
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
let letters = /^[a-zA-Z]+$/;

const valideInputs = () => {
    const userName = prenom.value.trim();
    const userNameSnd = nom.value.trim();
    const emailN = email.value.trim();
    const numberInput = particip.value.trim();
    //const dateInput = date.value; */
    if (userName === "") {
        prenom.classList.remove('black')
        prenomError.classList.remove('blackError2')
        setError(prenom, 'le prénom est requis');
    } else if (!userName.match(letters)) {
        prenom.classList.remove('black')
        prenomError.classList.remove('blackError2')
        setError(prenom, 'Entrer des lettres. les chiffres ne sont pas autorisés');
    } else if (userName.length < 3) {
        prenom.classList.remove('black')
        prenomError.classList.remove('blackError2')
        setError(prenom, 'Vous devez entrer au moins 3 charactères');
    } else {
        prenom.classList.remove('black')
        prenomError.classList.remove('blackError2')
        setSuccess(prenom)
    }

    if (userNameSnd === "") {
        nom.classList.remove('black')
        setError2(nom, 'le nom est requis');
    } else if (!userNameSnd.match(letters)) {
        setError2(nom, 'Entrer des lettres. les chiffres ne sont pas autorisés');
    } else if (userNameSnd.length < 3) {
        setError2(nom, 'Vous devez entrer au moins 3 charactères');
    } else {
        setSuccess2(nom)
    }
    if (emailN === "") {
        setError(email, 'L\'email est requis')
    } else if (!isValidEmail(emailN)) {
        setError(email, 'Adresse Email Invalide')
    } else {
        setSuccess(email)
    }
    if (numberInput === "") {
        setError(particip, 'Ce champ est requis')
    } else {
        setSuccess(particip)
    }
    selectYear();
    if (conditionChecked.checked === false) {
        userCondition.classList.add('borderCondition')
    } else {
        userCondition.classList.remove('borderCondition')
    }
    if (userName != "" && userNameSnd != "" && emailN != "" && numberInput != "") {
        displaySuccessMessage();
        let inputControl = document.querySelectorAll('.form-group')
        console.log(inputControl)
        for (i = 0; i < inputControl.length; i++) {
            inputControl[i].classList.remove('success');
            inputControl[i].classList.remove('error');
        }
        prenomControl.classList.remove('success2')
        prenomControl.classList.remove('error2')
        form.reset();
    }
}
let jourSelect = document.getElementById('jourSelect');
let moisSelect = document.getElementById('moisSelect');
let anneeSelect = document.getElementById('anneeSelect');
let errorDate = document.querySelector('.errorDate');
function selectYear() {
    let date = new Date();

    let age = date.getFullYear() - (+anneeSelect.value);
    if (age < 10) {
        jourSelect.classList.remove('lu1');
        moisSelect.classList.remove('lu1');
        anneeSelect.classList.remove('lu1');
        jourSelect.classList.add('lu');
        moisSelect.classList.add('lu');
        anneeSelect.classList.add('lu');
        errorDate.innerText = "Entrer une date valide"
    } else {
        errorDate.innerText = ""
        jourSelect.classList.add('lu1');
        moisSelect.classList.add('lu1');
        anneeSelect.classList.add('lu1');
        jourSelect.classList.remove('lu');
        moisSelect.classList.remove('lu');
        anneeSelect.classList.remove('lu');
    }
}




loginShow.addEventListener('click', () => {
    modal.style.display = "block"
    formContent.style.display = "block"
    formSuccess.style.display = "none"
    /* let inputControl = document.querySelectorAll('.form-group')
     let inputControlError = document.querySelectorAll('.error')
     let inputControlError2 = document.querySelector('.error2')
     console.log(inputControlError2)
     for (i = 0; i < inputControl.length; i++) {
         inputControl[i].classList.add('black');
     }
     jourSelect.classList.remove('lu1');
     moisSelect.classList.remove('lu1');
     anneeSelect.classList.remove('lu1');
     jourSelect.classList.remove('lu');
     moisSelect.classList.remove('lu');
     anneeSelect.classList.remove('lu');
     inputControlError2.classList.add('blackError');
     nom.classList.add('borderColord');
     errorDate.innerText = "";
     for (i = 0; i < inputControlError.length; i++) {
         inputControlError[i].classList.add('blackError');
     }*/
})

loginSndShow.addEventListener('click', () => {
    modal.style.display = "block"
    formContent.style.display = "block"
    formSuccess.style.display = "none"
    /* let inputControl = document.querySelectorAll('.form-group')
     let inputControlError = document.querySelectorAll('.error')
     let inputControlError2 = document.querySelector('.error2')
     for (i = 0; i < inputControl.length; i++) {
         inputControl[i].classList.add('black');
     }
     jourSelect.classList.remove('lu1');
     moisSelect.classList.remove('lu1');
     anneeSelect.classList.remove('lu1');
     jourSelect.classList.remove('lu');
     moisSelect.classList.remove('lu');
     anneeSelect.classList.remove('lu');
     inputControlError2.classList.add('blackError')
     errorDate.innerText = "";
     for (i = 0; i < inputControlError.length; i++) {
         inputControlError[i].classList.add('blackError')
     }*/
})


toggleLoginTimes.addEventListener('click', () => {
    modal.style.display = "none"
    jourSelect.classList.remove('lu1');
    moisSelect.classList.remove('lu1');
    anneeSelect.classList.remove('lu1');
})



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}