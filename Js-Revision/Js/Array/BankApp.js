"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const RenderMoverIntoDom = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (element, index) {
    const html = `
      <div class="movements__row">
        <div class="movements__type ${element > 0 ? "movements__type--deposit" : "movements__type--withdrawal"}">${
      element > 0 ? "deosit" : "withdrawal"
    }</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${Math.abs(element)}€</div>
      </div>
      `;

    containerMovements.insertAdjacentHTML("beforeend", html);
  });
};

// Convert owner name into short name
const createUserName = function (accounts) {
  accounts.forEach((el) => {
    const userName = el.owner
      .toLowerCase()
      .split(" ")
      .map(function (name) {
        return name[0];
      });

    el.ShortName = userName.join("");
  });
};

createUserName(accounts);

// In Blc
const InBlc = function (mov) {
  let inBlcValue = mov.movements.filter((el) => el > 0).reduce((acc, crv) => acc + crv);
  labelSumIn.textContent = inBlcValue;
};

// Out Blc
const OutBlc = function (mov) {
  const OutBlcValue = mov.movements.filter((el) => el < 0).reduce((acc, crv) => acc + crv);
  labelSumOut.textContent = OutBlcValue;
};

// Int rate
const IntRate = function (mov) {
  const IntRatValue = mov.movements.map((el) => (el * 1.2) / 100).reduce((acc, crv) => acc + crv);
  labelSumInterest.textContent = IntRatValue;
};

let totalMov;
// total blc
const GetTotalBlcHandler = function (mov) {
  totalMov = mov.movements.reduce((acc, crv) => acc + crv);
  labelBalance.textContent = `${totalMov}€`;
};

// UI Function
const UIFunction = function (element) {
  // 2 - if the user name the match then show the amount array into the dom
  RenderMoverIntoDom(element.movements);
  // Get total blc
  GetTotalBlcHandler(element);
  // Inc blc
  InBlc(element);
  // Out blc
  OutBlc(element);
  // int rate
  IntRate(element);
};

let currentAccount;
// filter accounts
const FilterUserBuyNameAndPin = function (e) {
  e.preventDefault();

  let userValue = inputLoginUsername.value;
  let userPin = inputLoginPin.value;

  currentAccount = accounts.find((el) => el.ShortName == userValue && el.pin == userPin);

  // 1 - filter the array when the user name is match
  accounts.forEach(function (ele) {
    if (ele.ShortName == userValue && ele.pin == userPin) {
      UIFunction(ele);
      containerApp.style.opacity = "1";
    }
  });
};

// Button Handler
btnLogin.addEventListener("click", FilterUserBuyNameAndPin);

// Transfer money // not complete
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const findAccountTrans = accounts.find((el) => el.ShortName === inputTransferTo.value);
  const TransferMoneyMax = +inputTransferAmount.value;

  // Transfer the money from the another account
  if (TransferMoneyMax > 0 && TransferMoneyMax <= totalMov && findAccountTrans && findAccountTrans !== currentAccount) {
    // if the transfer account get the money then Current account lose the amount and Transfer account get the amount

    // Update the UI
    setTimeout(() => {
      currentAccount.movements.push(-TransferMoneyMax);
      findAccountTrans.movements.push(TransferMoneyMax);
      UIFunction(currentAccount);
    }, 1000);
  }
});

// Request Lone
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const inputLoanAmountValue = +inputLoanAmount.value;
  currentAccount.movements.unshift(inputLoanAmountValue);

  // Update the UI
  setTimeout(() => {
    UIFunction(currentAccount);
  }, 1000);
});

// Close account // not complete
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  const index = accounts.findIndex((acc) => {
    acc.ShortName == currentAccount.ShortName;
  });
});
