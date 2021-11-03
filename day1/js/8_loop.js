const array = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (let v of array) {
    console.log(v)
}

array.forEach((v) => console.log(v));

array.forEach(function (v) {
    console.log(v);
});

console.log(array.map((v) => {
   return {key:`STR - ${v * 2}`};
}));

console.log(array.splice(array.findIndex((v) => v === 5), 1));
console.log(array.find((v) => v === 5));

console.log(array.filter((v) => v % 2 !== 0));