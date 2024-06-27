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
            changeMeetingDaySection();
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
    dayInThisMonth(dayInThisMonth());

}
