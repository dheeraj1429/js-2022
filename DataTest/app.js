const DateInput = document.querySelector('.DateInput');
const btn = document.querySelector('.btn');
const data = document.querySelector('.Date');

const date = new Date().toISOString().split('T')[0];
DateInput.setAttribute('min', date);

const second = 1000;
const min = second * 60;
const hour = min * 60;
const day = hour * 24;

let userData;

const getDateFunction = function () {
  setInterval(() => {
    const value = DateInput.value;
    const now = new Date();
    const then = new Date(value).getTime();
    const distance = then - new Date(now).getTime();

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const mins = Math.floor((distance % hour) / min);
    const seconds = Math.floor((distance % min) / second);

    data.textContent = `${days} ${hours} ${mins} ${seconds}`;

    userData = {
      days,
      hours,
      mins,
      seconds,
    };

    localStorage.setItem('data', JSON.stringify(userData));
  }, 1000);
};

// get the data from local storage
const getData = function () {
  if (localStorage.getItem('data')) {
    const localData = JSON.parse(localStorage.getItem('data'));
    userData = localData;
  }
};

btn.addEventListener('click', getDateFunction);

getData();
