var money = 10000;
var buyACar = function (car) {
    // @ts-ignore
    return new Promise((function (resolve, reject) {
        setTimeout(function () {
            if (money >= 10000) {
                resolve("can buy" + car);
            }
            else {
                reject("Do not have enough money");
            }
        }, 100);
    }));
};
money = 300;
var promise = buyACar("Vinfast").then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
});
