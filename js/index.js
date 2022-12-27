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

var elementQuery = document.querySelector(".inscription #form")

let mediaQuery = window.matchMedia("(max-width: 560px)")
let mediaQuery2 = window.matchMedia("(max-width: 480px)")
let inputControl = document.querySelectorAll('.input-control');
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



function myFunctionMediaQuery(x) {
    if (x.matches) {
        elementQuery.style.width = "400px"
    } else {
        elementQuery.style.width = "540px"
    }
}
function myFunctionMediaQuery2(x) {
    if (x.matches) {
        elementQuery.style.width = "350px"
    } else {
        elementQuery.style.width = "400px"
    }
}

mediaQuery.addListener(myFunctionMediaQuery)
mediaQuery.addListener(myFunctionMediaQuery2)

function prenomFunction() {
    let prenomValue = prenom.value.trim();
    if (prenomValue === "") {
        prenomError.classList.remove('blackError');
        prenomControl.classList.remove('black');
        setError(prenom, 'Le prénom est requis');
    } else if (!prenomValue.match(letters)) {
        prenomError.classList.remove('blackError');
        prenomControl.classList.remove('black');
        setError(prenom, 'Entrer des lettres. les chiffres ne sont pas autorisés');
    } else if (prenomValue.length < 3) {
        prenomError.classList.remove('blackError');
        prenomControl.classList.remove('black');
        setError(prenom, 'Vous devez entrer au moins 3 charactères');
    } else {
        prenom.value = prenom.value.replace(/^.{1}/g, prenom.value[0].toUpperCase());
        prenomError.classList.remove('blackError');
        prenomControl.classList.remove('black');
        setSuccess(prenom)
    }
}

function nomFunction() {
    let nomValue = nom.value.trim();
    if (nomValue === "") {
        nomError.classList.remove('blackError');
        nomControl.classList.remove('black');
        setError(nom, 'Le nom est requis');
    } else if (!nomValue.match(letters)) {
        nomError.classList.remove('blackError');
        nomControl.classList.remove('black');
        setError(nom, 'Entrer des lettres. les chiffres ne sont pas autorisés');
    } else if (nomValue.length < 3) {
        nomError.classList.remove('blackError');
        nomControl.classList.remove('black');
        setError(nom, 'Vous devez entrer au moins 3 charactères');
    } else {
        nom.value = nom.value.toUpperCase();
        nomError.classList.remove('blackError');
        nomControl.classList.remove('black');
        setSuccess(nom)
    }
}

function emailFunction() {
    const emailN = email.value.trim();
    if (emailN === "") {
        emailError.classList.remove('blackError');
        emailControl.classList.remove('black');
        setError(email, 'l\'mail est requis')
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

function dateFunction() {
    let dateValue = date.value.trim();

    if (dateValue === "") {
        dateError.classList.remove('blackError');
        dateControl.classList.remove('black');
        setError(date, "La date est réquise")
    } else {
        dateError.classList.remove('blackError');
        dateControl.classList.remove('black');
        setSuccess(date);
    }
}

function numberValideFunction() {
    let numberValue = particip.value
    if (numberValue === "") {
        participError.classList.remove('blackError');
        participControl.classList.remove('black');
        setError(particip, "Ce champ est réquise")
    } else {
        participError.classList.remove('blackError');
        participControl.classList.remove('black');
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
    const dateInput = date.value;
    if (userName === "") {
        prenomError.classList.remove('blackError');
        prenomControl.classList.remove('black');
        setError(prenom, 'le prénom est requis');
    } else if (!userName.match(letters)) {
        prenomError.classList.remove('blackError');
        prenomControl.classList.remove('black');
        setError(prenom, 'Entrer des lettres. les chiffres ne sont pas autorisés');
    } else if (userName.length < 3) {
        prenomError.classList.remove('blackError');
        prenomControl.classList.remove('black');
        setError(prenom, 'Vous devez entrer au moins 3 charactères');
    } else {
        prenomError.classList.remove('blackError');
        prenomControl.classList.remove('black');
        setSuccess(prenom)
    }

    if (userNameSnd === "") {
        nomError.classList.remove('blackError');
        nomControl.classList.remove('black');
        setError(nom, 'le nom est requis');
    } else if (!userNameSnd.match(letters)) {
        nomError.classList.remove('blackError');
        nomControl.classList.remove('black');
        setError(nom, 'Entrer des lettres. les chiffres ne sont pas autorisés');
    } else if (userNameSnd.length < 3) {
        nomError.classList.remove('blackError');
        nomControl.classList.remove('black');
        setError(nom, 'Vous devez entrer au moins 3 charactères');
    } else {
        nomError.classList.remove('blackError');
        nomControl.classList.remove('black');
        setSuccess(nom)
    }
    if (emailN === "") {
        emailError.classList.remove('blackError');
        emailControl.classList.remove('black');
        setError(email, 'L\'email est requis')
    } else if (!isValidEmail(emailN)) {
        emailError.classList.remove('blackError');
        emailControl.classList.remove('black');
        setError(email, 'Adresse Email Invalide')
    } else {
        emailError.classList.remove('blackError');
        emailControl.classList.remove('black');
        setSuccess(email)
    }
    if (numberInput === "") {
        participError.classList.remove('blackError');
        participControl.classList.remove('black');
        setError(particip, 'Ce champ est requis')
    } else {
        participError.classList.remove('blackError');
        participControl.classList.remove('black');
        setSuccess(particip)
    }
    if (dateInput === "") {
        dateError.classList.remove('blackError');
        dateControl.classList.remove('black');
        setError(date, 'La date est requise')
    } else {
        dateControl.classList.remove('black');
        dateControl.classList.remove('black');
        setSuccess(date)
    }
    if (conditionChecked.checked === false) {
        userCondition.classList.add('borderCondition')
    } else {
        userCondition.classList.remove('borderCondition')
    }
    if (userName != "" && userNameSnd != "" && emailN != "" && dateInput != "" && numberInput != "") {
        displaySuccessMessage();
        let inputControl = document.querySelectorAll('.input-control');
        for (i = 0; i < inputControl.length; i++) {
            inputControl[i].classList.remove('success');
            inputControl[i].classList.remove('error');
        }
        form.reset();
    }
}




loginShow.addEventListener('click', () => {
    modal.style.display = "block"
    formContent.style.display = "block"
    formSuccess.style.display = "none"
    let inputControl = document.querySelectorAll('.input-control');
    let inputControlError = document.querySelectorAll('.error');
    for (i = 0; i < inputControl.length; i++) {
        inputControl[i].classList.add('black');
        console.log("Marcelin");
    }
    for (i = 0; i < inputControlError.length; i++) {
        inputControlError[i].classList.add('blackError');
    }
})

loginSndShow.addEventListener('click', () => {
    modal.style.display = "block"
    formContent.style.display = "block"
    formSuccess.style.display = "none"
    let inputControl = document.querySelectorAll('.input-control');
    let inputControlError = document.querySelectorAll('.error');
    for (i = 0; i < inputControl.length; i++) {
        inputControl[i].classList.add('black');
    }
    for (i = 0; i < inputControlError.length; i++) {
        inputControlError[i].classList.add('blackError');
    }
})


toggleLoginTimes.addEventListener('click', () => {
    modal.style.display = "none"
})



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}