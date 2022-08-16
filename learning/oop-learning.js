const fn = function (callback) {
    console.log("done");

    callback();
};

const newFun = function () {
    console.log("new fun");
};

fn(newFun);