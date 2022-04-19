/*
Synchronouse -> this type of code executed line by line

Each line of code waits for previous line to finish
*/

const a = "this is demo text";
setTimeout(() => {
  console.log("run first"); // -> this will runs when the time is completed
}, 1000);

console.log(a); // -> this will run first

/*
Asynchronous -> code is executed after a task that runs in the 'Background' finishes;

Asynchronous code is non-blocking

Execution doen't wiat for an asynchronous task to fininsh its work;

AJAX -> Asynchronous JavaScript And XMl
*/

// fetch ->

const getLoaction = function () {
  return new Promise(function (reslove, reject) {
    navigator.geolocation.getCurrentPosition(
      (posiotion) => {
        reslove(posiotion);
      },
      (err) => {
        reject(err);
      }
    );
  });
};

getLoaction().then((pos) => {
  console.log(pos);
});

const api = `https://goweather.herokuapp.com/weather/india`;

const getData = async function () {
  try {
    const res = await fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const { temperature } = data;
        console.log(temperature);
      });
  } catch (err) {
    console.log(err);
  } finally {
    console.log("this will run allways");
  }
};

getData();
