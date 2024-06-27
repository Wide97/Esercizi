const now = new Date();
const getYear = now.getFullYear();
const getMonth = now.getMonth();
const appointments = []; // array che contiene i giorni del mese
const monthNames = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
];

//calcolo numero giorni
const printCurrentMonth = () => {
    const title = document.querySelector('h1');
    const currentMonth = monthNames[getMonth];
    title.innerText = currentMonth;
}

const dayInThisMonth = () => {
    const lastDayInTheMonth = new Date(getYear, getMonth +1, 0) //lo 0 e' il giorno del mese perche non esiste lo 0 luglio (anno, mese, giorno)
    const numberOfDays = lastDayInTheMonth.getDate();
    return numberOfDays;
}
//celle per i giorni
const createDays = (daysNumber) => {
    const calendarDiv = document.getElementById('calendar');
    for (let i = 0; i < daysNumber; i++) {
        const dayCellDiv = document.createElement('div');
        dayCellDiv.classList.add('day');
        //celle cliccabili
        dayCellDiv.addEventListener('click', function(){
            unselectAllDays(); //deseleziona il giorno precedentemente selezionato
            dayCellDiv.classList.add('selected');
            changeMeetingDaySection(i);  
            if (appointments[i].lenght > 0) {
                showAppointments(i);
            } else {
                const appointmentsDiv = document.getElementById('appointments');
                appointmentsDiv.style.display = 'none';
            }
        });
        //creiamo il numero del giorno 
        const cellValue = document.createElement('h3');
        cellValue.innerText = i + 1;
        dayCellDiv.appendChild(cellValue);
        calendarDiv.appendChild(dayCellDiv);
        //popolo l' array dei giorni
        appointments.push([]);
       

    }
    console.log(appointments);
}

window.addEventListener('load', init());

function init(){
    printCurrentMonth();
    createDays(dayInThisMonth());
}

function unselectAllDays () {
    const previousSelected = document.querySelector('.selected');
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    }
}
function changeMeetingDaySection(dayDate){
    const newMeetingDay = document.getElementById('newMeetingDay');
    newMeetingDay.innerText = dayDate + 1;
    newMeetingDay.classList.add('hasDay');
}

function showAppointments(dayDate) {
    const dayAppointments =appointments[dayDate];
    const appointmentsList= document.querySelector('#appointments ul');
    appointmentsList.innerHTML = '';
    dayAppointments.forEach(appointment => {
        const newLi =document.createElement('li');
        newLi.innerText = appointment;
        appointmentsList.appendChild(newLi);
    });
    const appointmentsDiv = document.getElementById('appointments');
    appointmentsDiv.style.display = 'block';
}
