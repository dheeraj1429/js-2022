'use strict';

const Container = document.querySelector('.Container');

const api = `https://api.unsplash.com/photos/?client_id=k-2phInFwSmbdSL_ptLu-5XTopHSkaFyGip_HtlD0EU`;

const photoArr = [];

// create a dom elem
const CreateDomELe = function (data) {
  data.flat().forEach((item) => {
    const { regular } = item.urls;
    // create the img element
    const img = document.createElement('img');
    // set the src
    img.src = regular;
    // show the elem into the dom
    Container.appendChild(img);
  });
};

const res = async function () {
  const resData = fetch(api)
    .then((res) => res.json())
    .then((data) => {
      photoArr.push(data);
      CreateDomELe(photoArr);
    });
};

res();

window.addEventListener('scroll', function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    res();
  }
});
