// Exportin modules

// Private modules
const data = [1, 2, 3, 4, 5];

// Name Export
export const sumNumber = function (num) {
  return num * 10;
};

export const someDemoData = {
  name: "Demo Restorent",
  startMenu: ["pizza", "momos", "roti"],
  mainMenu: ["Chai", "Roti"],

  OpenData: {
    sun: {
      Morning: "10 am",
      Evening: "5 pm",
    },

    mon: {
      Morning: "12 am",
      Evening: "8 pm",
    },

    tue: {
      Morning: "8 am",
      Evening: "4 pm",
    },
  },

  getAllData() {
    return {
      name: this.name,
      staterMenu: this.startMenu,
      mainMenu: this.mainMenu,
      date: this.OpenData,
    };
  },
};

export { data };
