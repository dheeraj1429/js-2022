'use strict';

const num = 10;

const month = 'jan';
const ar = ['jan'];

for (let i = 0; i < num; i++) {

  if(ar.includes(month)) {
    console.log(month);
  }else {
    return
  }



  // if (month == 'jan') {
  //   if (ar.includes(month)) {
  //     return;
  //   } else {
  //     ar.push(month);
  //     console.log(ar);
  //   }
  // } else {
  //   return;
  // }
}

// prettier-ignore
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');

// // Get user location
// if (navigator) {
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const { latitude, longitude } = position.coords;
//       const cords = [latitude, longitude];

//       // Lefleat
//       const map = L.map('map').setView(cords, 13);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       // Add event
//       map.on('click', function (e) {
//         // Getting the courds from the map when the use click into the map
//         const { lat, lng } = e.latlng;
//         // Maker
//         L.marker([lat, lng])
//           .addTo(map)
//           .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//           .openPopup();
//       });
//     },
//     function (err) {
//       alert('could not get your loaction');
//     }
//   );
// }
