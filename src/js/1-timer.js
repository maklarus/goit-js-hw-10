// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const calendar = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

let userSelectedDates;
let countdownInterval;
buttonStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
      userSelectedDates = selectedDates;
      buttonStart.disabled = false;
    } else {
      iziToast.show({
        message: 'Please choose a date in the future',
        position: 'topRight',
        titleColor: '#fff',
        messageColor: '#fff',
        backgroundColor: 'tomato',
      });
      buttonStart.disabled = true;
    }
  },
};

flatpickr(calendar, options);

function addLeadingZero(value) {
  return value < 10 ? '0' + value : value;
}

function updateTimer() {
  const userSelectedDate = userSelectedDates[0];
  const currentDate = new Date();

  const timeDifference = userSelectedDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    return;
  }

  const msToDate = convertMs(timeDifference);

  days.innerHTML = addLeadingZero(msToDate.days);
  hours.innerHTML = addLeadingZero(msToDate.hours);
  minutes.innerHTML = addLeadingZero(msToDate.minutes);
  seconds.innerHTML = addLeadingZero(msToDate.seconds);
}

function startTimer() {
  buttonStart.disabled = true;
  calendar.disabled = true;

  updateTimer();

  countdownInterval = setInterval(updateTimer, 1000);
}

buttonStart.addEventListener('click', startTimer);
