
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