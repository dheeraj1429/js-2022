"use strict";

// get the elements
const todoInout = document.querySelector(".todoInout");
const plusButton = document.querySelector(".Plus");
const ListContainer = document.querySelector(".ListContainer");

const renderDomElm = function (inputValue) {
  const html = `
        <div class="listPara">
            <p class="listParagraph">${inputValue}</p>
            <i class="fas fa-trash-alt"></i>
        </div>
    `;

  ListContainer.insertAdjacentHTML("beforeend", html);

  // Remov elem form the dom
  removeParagraph();
};

const removeParagraph = function () {
  // grab the element from the dom
  const RemoveButton = document.querySelectorAll(".fa-trash-alt");
  RemoveButton.forEach((item) => {
    item.addEventListener("click", function (e) {
      const parentDiv = e.target.parentNode;
      // Remove the elm
      parentDiv.remove();
    });
  });
};

const addDomELmFunction = function () {
  let inputValue = todoInout.value;
  if (inputValue == "") return;

  // show the dom list
  renderDomElm(inputValue);

  // clear the value
  todoInout.value = "";
};

plusButton.addEventListener("click", addDomELmFunction);

// if the use press enter key
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    addDomELmFunction();
  }
});
