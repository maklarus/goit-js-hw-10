// // Описаний у документації
// import iziToast from 'izitoast';
// // Додатковий імпорт стилів
// import 'izitoast/dist/css/iziToast.min.css';

// const form = document.querySelector('.form');

// function createPromis(event) {
//   event.preventDefault();

//   const notificationDelay = form.elements['delay'].value;
//   const notificationState = document.querySelector(
//     'input[name="state"]:checked'
//   ).value;

//   if (notificationState === 'rejected') {
//     const fulfilledPromise = notificationDelay => {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve(
//             iziToast.show({
//               message: 'Please choose a date in the future',
//               position: 'topRight',
//               titleColor: '#fff',
//               messageColor: '#fff',
//               backgroundColor: 'tomato',
//             })
//           );
//         }, notificationDelay);
//       });
//     };
//   }

//   console.log(notificationState, notificationDelay);
// }

// form.addEventListener('submit', createPromis);

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const form = document.querySelector('.form');

// function createPromise(event) {
//   event.preventDefault();

//   const notificationDelay = form.elements['delay'].value;
//   const notificationState = document.querySelector(
//     'input[name="state"]:checked'
//   ).value;

//   if (notificationState === 'rejected') {
//     const fulfilledPromise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject(
//           iziToast.show({
//             message: 'Please choose a date in the future',
//             position: 'topRight',
//             titleColor: '#fff',
//             messageColor: '#fff',
//             backgroundColor: 'tomato',
//           })
//         );
//       }, notificationDelay);
//     });

//     fulfilledPromise.catch(error => {
//       console.error('Promise rejected:', error);
//     });
//   }

//   console.log(notificationState, notificationDelay);
// }

// form.addEventListener('submit', createPromise);

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = form.elements['delay'].value;
  const state = document.querySelector('input[name="state"]:checked').value;

  if (delay > 0) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then(delay => {
        iziToast.show({
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: 'topRight',
          titleColor: '#fff',
          messageColor: '#fff',
          backgroundColor: 'green',
        });
      })
      .catch(delay => {
        iziToast.show({
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topRight',
          titleColor: '#fff',
          messageColor: '#fff',
          backgroundColor: 'red',
        });
      });
  } else {
    iziToast.show({
      message: `Delay must be more then 0`,
      position: 'topRight',
      titleColor: '#fff',
      messageColor: '#fff',
      backgroundColor: 'red',
    });
  }
});
