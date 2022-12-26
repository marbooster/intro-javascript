let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
let menu = document.querySelector('.menu')

toggle.addEventListener('click', function() {
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

var mediaQuery = window.matchMedia("(max-width: 560px)")
var mediaQuery2 = window.matchMedia("(max-width: 480px)")
let inputControl = document.querySelectorAll('.input-control');
let inputControlError = document.querySelectorAll('.input-control .error');


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
        elementQuery2.style.width = "400px"
    }
}

mediaQuery.addListener(myFunctionMediaQuery)
mediaQuery.addListener(myFunctionMediaQuery2)

function prenomFunction() {
    let prenomValue = prenom.value.trim();
   if(prenomValue === "")
   {
    setError(prenom, 'Le prénom est requis');
   } else if(!prenomValue.match(letters)){
    setError(prenom, 'Entrer des lettres. les chiffres ne sont pas autorisés');
   }else if(prenomValue.length < 3)
   {
        setError(prenom, 'Vous devez entrer au moins 3 charactères');
    }else {
        prenom.value = prenom.value.replace(/^.{1}/g, prenom.value[0].toUpperCase());
        setSuccess(prenom)
  }
}

function nomFunction() {
    let nomValue = nom.value.trim();
   if(nomValue === "")
   {
    setError(nom, 'Le nom est requis');
   } else if(!nomValue.match(letters)){
    setError(nom, 'Entrer des lettres. les chiffres ne sont pas autorisés');
   }else if(nomValue.length < 3)
   {
        setError(nom, 'Vous devez entrer au moins 3 charactères');
    }else {
        nom.value = nom.value.toUpperCase();
        setSuccess(nom)
  }
}

function emailFunction() {
    const emailN = email.value.trim();
    if(emailN === "")
    {
        setError(email, 'l\'mail est requis')
    } else if(!isValidEmail(emailN)) {
        setError(email, 'Adresse Email Invalide')
    }else {
        setSuccess(email)
    }
}

function dateFunction() {
    let dateValue = date.value.trim();

    if(dateValue === "")
    {
        setError(date, "La date est réquise")
    } else {
        setSuccess(date);
    }
}

function numberValideFunction() {
    let numberValue = particip.value
    if(numberValue === "")
    {
        setError(particip, "Ce champ est réquise")
    } else {
        setSuccess(particip);
    }
    if(isNaN(numberValue)){
        setError(particip, "Entrer que des nombres");
    }else if(numberValue === "" || numberValue === undefined){
        setError(particip, "Ce champ requis");
    } else {
        setSuccess(particip)
    }
}

closeSuccess.addEventListener('click', () => {
    modal.style.display="none"
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

 function displaySuccessMessage(){
    formContent.style.display="none"
    formSuccess.style.display="flex"
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
    if(userName === "") {
        setError(prenom, 'le prénom est requis');
    } else if(!userName.match(letters)){
        setError(prenom, 'Entrer des lettres. les chiffres ne sont pas autorisés');
    }else if(userName.length < 3)
    {
        setError(prenom, 'Vous devez entrer au moins 3 charactères');
    }else {
        setSuccess(prenom)
    }

    if(userNameSnd === "") {
        setError(nom, 'le nom est requis');
    } else if(!userNameSnd.match(letters)){
        setError(nom, 'Entrer des lettres. les chiffres ne sont pas autorisés');
    }else if(userNameSnd.length < 3)
    {
        setError(nom, 'Vous devez entrer au moins 3 charactères');
    }else {
        setSuccess(nom)
    }
    if(emailN === "")
    {
        setError(email, 'L\'email est requis')
    } else if(!isValidEmail(emailN)) {
        setError(email, 'Adresse Email Invalide')
    }else {
        setSuccess(email)
    }
    if(numberInput === "")
    {
        setError(particip, 'Ce champ est requis')
    } else {
        setSuccess(email)
    }
    if(dateInput === "")
    {
        setError(date, 'La date est requise')
    } else {
        setSuccess(date)
    }
    if(conditionChecked.checked === false) {
        userCondition.classList.add('borderCondition')
    } else {
        userCondition.classList.remove('borderCondition')
    }
    if(userName !="" && userNameSnd != "" && emailN !="" && dateInput !="" && numberInput !="") {
       displaySuccessMessage();
       let inputControl = document.querySelectorAll('.input-control');
        for(i=0; i<inputControl.length; i++)
        {
           inputControl[i].classList.remove('success');
        }
        form.reset();
    }
}




loginShow.addEventListener('click', () => {
    modal.style.display="block"
    formContent.style.display="block"
    formSuccess.style.display="none"
})

loginSndShow.addEventListener('click', () => {
    modal.style.display="block"
    formContent.style.display="block"
    formSuccess.style.display="none"
})


toggleLoginTimes.addEventListener('click', () => {
    modal.style.display="none"
})



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}