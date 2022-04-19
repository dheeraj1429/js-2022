"use strict";

const ShowErrorModelWindow = function (errValues) {
  const errorModel = `
        <div class="Popup_div showPopUp">
          <div class="ClosePopUpDiv">
              <i class="fas fa-times"></i>
              </div>
            <p>${errValues}</p>
        </div>
  `;

  const bodyELe = document.querySelector("body");
  bodyELe.insertAdjacentHTML("beforeend", errorModel);
};

// Elem Object
const $ = function (DomElem) {
  // Dom Selction
  const DomELemObject = {
    elem: document.querySelector(`${DomElem}`),

    strHandler: (str) => str[0].toUpperCase() + str.slice(1),

    // CLICK EVENT
    click: function (firstParm, secondParm) {
      this.elem.addEventListener("click", function () {
        // Style

        if (!firstParm) return DomELemObject;

        if (firstParm) {
          this.style[`${firstParm}`] = secondParm;
        }
      });
    },

    // STYLE
    style: function (firstParm, secondParm) {
      const strSplit = firstParm.split("-");

      if (strSplit.length > 1) {
        const [first, second] = strSplit;

        const properStr = `${first}${this.strHandler(second)}`;

        this.elem.style[`${properStr}`] = secondParm;
      } else {
        this.elem.style[`${firstParm}`] = secondParm;
      }
    },

    // FILTER
    filter: function (type, value) {
      if (!type) {
        ShowErrorModelWindow(`can't find values`);
      }
      this.elem.style.filter = `${type}(${value})`;
    },

    // CONSOLE
    cl: function (firstParam, secondParam) {
      if (typeof secondParam == "object") {
        this.elem.addEventListener(`${firstParam}`, function () {
          console.log(secondParam.elem);
        });
      } else {
        this.elem.addEventListener(`${firstParam}`, function () {
          console.log(secondParam);
        });
      }
    },

    // DATE FORMATE
    dateFormate: function (value, date, formate) {
      const now = new Date(date);

      const option = {
        year: value,
        month: value,
        day: value,
        hour: value,
        minute: value,
        second: value,
      };

      const formateData = Intl.DateTimeFormat(formate, option).format(now);

      return formateData;
    },

    // Key press
    keyPress: (Key) => {
      window.addEventListener("keydown", (event) => {
        if (!Key) {
          console.log(event);
        } else {
          console.log(event.key);
        }
      });
    },

    // Adding Class, Removing Class, Toggle Class
    classHandler: (ele, className, value) => {
      if (!ele) ShowErrorModelWindow("please enter the values");

      return ele.elem.classList[`${value}`](className);
    },
  };

  return DomELemObject;
};

////////////////////////////

// $("p").filter();

// $("p").filter("blur", "2px");

// $("p").filter("hue-rotate", "90deg");

// $("p").style("color", "#e1e1e1");

// $("p").classHandler($("h3"), "show-div", "add");

// $("p").classHandler($("h3"), "active", "add");
// $("p").classHandler($("h3"), "active", "remove");

// $("p").remove($("h3"), "show-div");
// console.log($(".show-div"));

// $().keyPress();

// console.log($().dateFormate("numeric", "10", "GMT"));

// $("p").cl("click", $("p"));
// $("p").cl("click", $(".container"));
// $("h3").cl("click", "this some dome text");

// $("p").click("background-color", "blue");

// $("h3").style("color", "red");

// $('h2').click(function() {alert()})

// $("p").style("background-color", "red");
// $("p").style("background-color", "red");
// $("h1").style("color", "red");
// $("p").click("color", "red");

// console.log($("h1"));
// $(".Box").style("backgroundColor", "blue");
// $(".Box").click("width", "200px");

// $("p").style("font-size", "100px");
// $("p").style("fontSize", "40px");
// fontSize -> font-size -> fontsize

// console.log($("h1").attr());
// console.log($("h1").attr("data-target"));
