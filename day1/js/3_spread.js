const foo = {
    id: 1,
    name: "HelloMan",
    age: 20,
};

// Copy Foo?
const bar = foo;    // 같은 래퍼런스.. 주소값만 복사가 된 상태

bar.age = 30;

console.log(bar.age);
console.log(foo.age);

const bar2 = {...foo};

bar2.age = 10;

console.log(bar2.age);
console.log(foo.age);

const bar3 = {...foo, age: 10};

console.log(bar3.age);
console.log(foo.age);

const arr1 = [1, 5, 4, 2, 6];
const arr2 = arr1;  // 객체 복사

arr1.push(7);

console.log(arr1);
console.log(arr2);

const arr3 = arr1.concat(8);
console.log(arr1);
console.log(arr3);

const arr4 = [...arr1, 9];
console.log(arr1);
console.log(arr4);

const arr5 = [...arr1, 10, ...arr1];
console.log(arr1);
console.log(arr4);