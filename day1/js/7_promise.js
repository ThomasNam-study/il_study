const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(50);
        // reject(new Error());
    }, 1000);
});

myPromise
    .then(n => {
        console.log(n);
    })
    .catch(error => {
        console.log(error);
    });

/*async function asyncTest () {
    const result = await myPromise

    console.log("async", result);
}

asyncTest();*/