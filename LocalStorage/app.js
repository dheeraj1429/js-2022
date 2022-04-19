const interText = document.querySelector('.interText');
const btn = document.querySelector('.btn');

let obj = [];

// if there is no data in local storage
const getData = function () {
  if (localStorage.getItem('data')) {
    const localData = JSON.parse(localStorage.getItem('data'));
  } else {
    const datObj = {
      name: 'demo',
    };

    localStorage.setItem('data', JSON.stringify(datObj));
  }
};

// set local storage data
const setData = function () {
  const value = interText.value;
  obj.push({ name: value });
  localStorage.setItem('data', JSON.stringify(obj));
};

btn.addEventListener('click', setData);

getData();
