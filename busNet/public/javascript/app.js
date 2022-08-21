"use strict";

const tecDomELm = document.querySelectorAll(".tab_div");
const iconsTabsDivElms = document.querySelectorAll(".icons_tabs_div");
const tabs = document.querySelectorAll(".tabs_div");
const tabRetails = document.querySelectorAll(".tab_reatils");
const retialsTab = document.querySelectorAll('.retial');

const eventFunction = function (elements, cl, options) {
    elements.forEach((el) => {
        el.addEventListener("click", function () {
            elements.forEach((elm) => {
                elm.classList.remove(cl);
            });
            el.classList.add(cl);

            if (options && options.tabs) {
                retialsTab.forEach(el => {
                    el.classList.remove('retial_active')
                })
                const id = el.getAttribute('id').split('-')[1];
                const domElm = document.querySelector(`.${id}`);

                if (!!domElm) domElm.classList.add('retial_active');
                else throw new Error('dom elements is not selected!')

            }
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
eventFunction(tabRetails, "tb_active", { tabs: true });