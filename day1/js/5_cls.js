class MyClass {
    constructor(v1, v2) {
        this.v1 = v1;
        this.v2 = v2;
    }

    printValue() {
        console.log(this.v1);
        console.log(this.v2);
    }
}

let mc = new MyClass(5, 6);
mc.printValue();

let mc2 = {
    v1: 5,
    v2: 10,
    printValue () {
        console.log(this.v1);
        console.log(this.v2);
    }
}

mc2.printValue();
