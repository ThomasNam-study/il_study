let a = 0;
a = 1;  // OK
a = 2;  // Ok

const b = 0;
// b = 1;  // Error!!!

console.log(b);

const c = {val1: 0};
c.val1 = 1; // Ok

const d = c;



const e = {val1: c.val1};
const f = JSON.parse(JSON.stringify(c));

const f2 = {...c};

c.val1 = 2;

console.log(c);
console.log(d);
console.log(e);
console.log(f);

// console.log(c.val1);

// c = {val1: 1}   // Error!