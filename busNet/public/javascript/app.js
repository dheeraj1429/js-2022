"use strict";

const tecDomELm = document.querySelectorAll(".tab_div");
const iconsTabsDivElms = document.querySelectorAll(".icons_tabs_div");
const tabs = document.querySelectorAll(".tabs_div");

const eventFunction = function (elements, cl) {
    elements.forEach((el) => {
        el.addEventListener("click", function () {
            elements.forEach((elm) => {
                elm.classList.remove(cl);
            });
            el.classList.add(cl);
        });
    });
};

tecDomELm.forEach((el) => {
    el.addEventListener("click", function () {
        tecDomELm.forEach((el) => {
            el.classList.remove("light-tab-active");
        });

        el.classList.add("light-tab-active");
        const id = el.id;

        iconsTabsDivElms.forEach((el) => {
            el.classList.remove("tb_active");
        });

        const elm = document.querySelector(`.${id}-div`);
        elm.classList.add("tb_active");
    });
});

eventFunction(tabs, "tab-active");
