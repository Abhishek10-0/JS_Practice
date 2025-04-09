// 1)
let a = 2;
let b = 4;

console.log("a: ", a ,"b: ", b );

let temp = a;
a = b;
b = temp;


console.log("a: ", a ,"b: ", b );

//2)
let x = 10;
let y = 20;

console.log("x: ", x, "y: ", y);

x = x + y;
y = x - y;
x = x - y;

console.log("x: ", x, "y: ", y);