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

function prenomFunction() {
    let radioChoice = document.querySelector('input[type="radio"]:checked');
    console.log(radioChoice.value);
    let prenomValue = prenom.value.trim();
   if(prenomValue === "")
   {
    setError(prenom, 'Prénom est requis');
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
    setError(nom, 'Prénom est requis');
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
        setError(email, 'Email est requis')
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
        setError(date, "La date est reéquise")
    } else {
        setSuccess(date);
    }
}

function numberValideFunction() {
    let numberValue = particip.value
    console.log(numberValue);
    if(isNaN(numberValue)){
        setError(particip, "Entrer que des nombres");
    }else if(numberValue === "" || numberValue === undefined){
        setError(particip, "Champ requis");
    } else {
        setSuccess(particip)
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(date.value);
    valideInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

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
    if(userName === "") {
        setError(prenom, 'Prénom est requis');
    } else if(!userName.match(letters)){
        setError(prenom, 'Entrer des lettres. les chiffres ne sont pas autorisés');
    }else if(userName.length < 3)
    {
        setError(prenom, 'Vous devez entrer au moins 3 charactères');
    }else {
        setSuccess(prenom)
    }

    if(userNameSnd === "") {
        setError(nom, 'Prénom est requis');
    } else if(!userNameSnd.match(letters)){
        setError(nom, 'Entrer des lettres. les chiffres ne sont pas autorisés');
    }else if(userNameSnd.length < 3)
    {
        setError(nom, 'Vous devez entrer au moins 3 charactères');
    }else {
        setSuccess(nom)
    }

   
}


// Get the modal
var modal = document.getElementById('login-modal');
var loginShow = document.getElementById('login-show');
var toggleLoginTimes = document.getElementById('toggle-login-times');

loginShow.addEventListener('click', () => {
    modal.style.display="block"
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