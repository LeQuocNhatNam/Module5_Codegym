let money = 10000;
const buyACar = (car:any) => {
    // @ts-ignore
    return new Promise(((resolve,reject) => {
        setTimeout(() => {
            if (money>=10000){
                resolve("can buy" + car);
            } else {
                reject("Do not have enough money");
            }
        }, 100);
    }))
}

money = 300;
const promise = buyACar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})
