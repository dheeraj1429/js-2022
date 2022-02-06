'use strict';

const hashPasswordBtn = document.querySelector('.hashing_password');
const inputElm = document.querySelector('.input_elm');
const passwordElm = document.querySelector('.password');

// Password data
const passwordInti = {
   keyAlphPas:
      '@$!@$#(*^(*)!^$(*&@!%$)!1@2(3*4^5@6)7(8*9^0!@#sd*as&%fwee@h#t*xc&sd!hrrth@tThgas#*c&chucasbscuyb@!@#czx(*&zcSYvdHvdDbdsd982ysae1920e87927(@*&#!(',
   keyAlphPasOne: `~!@#$%^&*()_+}|":?><-.|'':;./`,
   keyAlphaLetter: `abcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+}|":?><-.|'':;./`,
};

const convartToArr = function (ar) {
   return Array.from(ar);
};

const keyAlphaLetterAr = convartToArr(passwordInti.keyAlphaLetter);
const keyAlphPasAr = convartToArr(passwordInti.keyAlphPas);
const keyAlphPasOneAr = convartToArr(passwordInti.keyAlphPasOne);

// get the user data
const getUserPassword = function () {
   const value = inputElm.value;
   let pasEL = [];
   let str = '';

   if (value) {
      const valueStr = value.toLowerCase();
      const valueAr = Array.from(valueStr);

      keyAlphaLetterAr.forEach((el, i) => {
         valueAr.forEach((item) => {
            if (item === el) {
               pasEL.push(i);
            }
         });
      });

      for (let i = 0; i < pasEL.length; i++) {
         const arrayValue = pasEL[i];
         str += keyAlphPasAr[arrayValue];
      }

      passwordElm.textContent = str;
   }
};

hashPasswordBtn.addEventListener('click', getUserPassword);
