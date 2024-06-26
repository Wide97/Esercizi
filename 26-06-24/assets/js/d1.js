
// elementi form
const myForm = document.getElementById('myForm');
const regName = document.getElementById('regName');
const regSurname = document.getElementById('regSurname');
const regEmail = document.getElementById('regEmail');
const regPassword = document.getElementById('regPassword');
const regPhone = document.getElementById('regPhone');
const regAge = document.getElementById('regAge');
const btnSubmit = document.getElementById('btnSubmit');
const formError = document.getElementById('error');
const formThanks = document.getElementById('thanks');

//Oggetto che contiene dati

const regUser = {
    name: '',
    surname: '',
    email: '',
    password: '',
    phone: '',
    age:0,
};

// regerx di verifica
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

let validEmail = false;
let validPassword = false;
let validSurname = false;
let validAge = false;

window.addEventListener('load', init()); // cosa fa javascript caricata finestra

//operazioni dopo che la pagina si e' caricata
function init() {
    formThanks.style.display = 'none';//display del thanks non visibile
    btnSubmit.setAttribute('disabled', 'true'); //bottone disabilitato finche non compili
} 
//fine delle cose che javascript deve fare in partenza

//eventi
//compilazione campi e verifica
regSurname.addEventListener('blur', function(){
    validSurname = false; //utente stupido, nel caso cancelli quello scritto precedentemente
    verify();
    if (regSurname.value === ''){//dico che il campo surname e obbligatorio
        formError.innerText = 'Il campo cognome e obbligatorio';
        return //esci da li, aspetta
    } else {
        formError.innerText= ''; //dico che non ce errore
        validSurname = true; //dico che il surname e valido
        verify();
    }
});

//controllo email
regEmail.addEventListener('blur', function(){
    validEmail = false;
    verify(); //ce bisogno di rendere valido il form
    if (regEmail.value === ''){
        formError.innerText = 'il campo email e obbligatorio';
        return;

    } else if (!regexEmail.test(regEmail.value)){
        formError.innerText ='inserire mail valida';
        return;

    } else {
        formError.innerText = '';
        validEmail = true;
        verify();
    }
});

regPassword.addEventListener('blur', function(){
    validPassword = false;
    verify();
    if (regPassword.value === ''){
        formError.innerText = 'Inserire mail valida';
        return;
    } else if (!regexPassword.test (regPassword.value)){
        formError.innerText = 'metti pass valida';
        return;
    } else {
        formError.innerText = '';
        validPassword= true;
        verify();
    }
});

regAge.addEventListener('blur', function(){
    validAge = false;
    verify();
    if (regAge.value <18){
        formError.innerText = 'devi essere maggiorenne';
        return;
    } else if (regAge.value ===''){
        formError.innerText= 'iil campo e obbligatorio';
        return;
    } else {
        formError.innerText = '';
        validAge = true;
        verify();
    }
});

function verify(){
    if (validPassword && validAge && validEmail && validSurname){
        btnSubmit.removeAttribute('disabled');// se tutto e giusto il bottone si riabilita
    } else{
        btnSubmit.setAttribute('disabled', 'true');//se non metto questo il bottone rimane abilitato disabled, true vuol dire abilito il pulsante disabilita perche e falso in partenza
    }
}

