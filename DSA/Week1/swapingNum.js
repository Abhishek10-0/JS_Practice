// One Way of Swaping two numbers

let a = 10;
let b = 20;

temp = b; 
b=a;
a=temp;
console.log('a:', a, 'b:', b);

// Another way of Swaping two numbers

let x = 30;
let y = 40;

x = x+y;
y = x-y;
x = x-y;

console.log('x:', x, 'y:', y);

// Another way of Swaping two numbers

let m = 50;
let n = 60;     

m = m*n;
n = m/n;
m = m/n;

console.log('m:', m, 'n:', n);

// Another way of Swaping two numbers

let p = 70;
let q = 80;

[p,q] = [q,p];

console.log('p:', p, 'q:', q);
