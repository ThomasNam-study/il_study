class MyClass {
    constructor(v1, v2) {
        this.v1 = v1;
        this.v2 = v2;
    }

    printValue() {
        console.log(this.v1);
        console.log(this.v2);
    }

    printValue2 = () => {
        console.log(this.v1);
        console.log(this.v2);
    }

    print3 = () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];

        array.forEach((v) => {
           console.log(this.v1, v);
        });
    }
}

function callBackTest (func) {
    func();
}

let mc = new MyClass(5, 6);

mc.printValue();

// callBackTest(mc.printValue); // Error
callBackTest(mc.printValue2);

mc.print3();

//
// let mc2 = {
//     v1: 5,
//     v2: 10,
//     printValue () {
//         console.log(this.v1);
//         console.log(this.v2);
//     },
// }
//
// mc2.printValue();
//
// callBackTest(mc2.printValue);
