'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
let inputDistance = document.querySelector('.form__input--distance');
let inputDuration = document.querySelector('.form__input--duration');
let inputCadence = document.querySelector('.form__input--cadence');
let inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

class App {
   constructor() {}

   _getPostion() {
      // user location
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(this._loadMap, function (err) {
            console.log('could not find the location!');
         });
      }
   }

   _loadMap(location) {
      const { latitude, longitude } = location.coords;

      const cords = [latitude, longitude];

      map = L.map('map').setView(cords, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (mapE) {
         mapEvent = mapE;
         form.classList.remove('hidden');
      });
   }

   _showForm() {}

   _toggleElevationForm() {}

   _newWorkOut() {}
}

// Create a object with the
const app = new App();

app._getPostion();

// insert the user data into the map
form.addEventListener('submit', function (e) {
   e.preventDefault();

   console.log(inputDistance.value, inputDistance.value, inputCadence.value, inputElevation.value);

   // Clear filds
   inputDistance = inputDuration = inputCadence = inputElevation = '';

   // get the user click coords
   const { lat, lng } = mapEvent.latlng;

   // set the marker in the map
   L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
         L.popup({
            maxWidht: 200,
            minWidht: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
         })
      )
      .setPopupContent('time to workout')
      .openPopup();
});
