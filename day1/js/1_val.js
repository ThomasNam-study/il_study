let a = 0;
a = 1;  // OK
a = 2;  // Ok

const b = 0;
// b = 1;  // Error!!!

const c = {val1: 0};
c.val1 = 1; // Ok

// c = {val1: 1}   // Error!