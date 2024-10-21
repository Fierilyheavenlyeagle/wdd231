// calendar.js
$(document).ready(function () {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    events: [
      {
        title: 'Event 1',
        start: '2024-10-17'
      },
      {
        title: 'Event 2',
        start: '2024-10-18'
      }
    ],
    editable: true,
    eventLimit: true // allow "more" link when too many events
  });
});

const year = document.querySelector("#year");
const lastMod = document.querySelector("#lastModified");

const today = new Date();
const modfied = new Date(document.lastModified)
year.innerHTML = `<span class="year1">${today.getFullYear()}</span>`;
lastMod.innerHTML = `Last Modification : <span class="mod1">${modfied}</span>`


const daysMessage = document.querySelector('.numberofDays');


if (localStorage.getItem('lastVisited') == null) {
  localStorage.setItem('lastVisited', new Date())

  daysMessage.innerHTML = 'Welcome! Let us know if you have any questions.'
}
else {
  const lastVisited = new Date(localStorage.getItem('lastVisited'));
  const nowDate = new Date();

  const timeDifference = nowDate - lastVisited;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    daysMessage.innerHTML = 'Back so soon! Awesome!';
  }
  else if (daysDifference >= 1) {
    daysMessage.innerHTML = `You last visited ${daysDifference} days ago`
  }
  localStorage.setItem('lastVisited', new Date())
}

const hamburger = document.querySelector('#mybutton')
const animateme = document.querySelector('.animateme');


hamburger.addEventListener('click', () => {
  animateme.classList.toggle('close');
  hamburger.classList.toggle('close');
})







