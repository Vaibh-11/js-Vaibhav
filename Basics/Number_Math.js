let score=400
let health=new Number(100)
console.log(score);
console.log(health);
console.log(score.toString().charAt(1));
console.log(score.toFixed(2));

let anothernum=123.698
console.log(anothernum.toPrecision(3));

let num=100000000
console.log(num.toLocaleString('en-IN'));

//------------------------------------MATHS----------------------------------------------------------------

console.log(Math.abs(-8));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

let min=1
let max=6
console.log(Math.round(Math.random()));
console.log(Math.floor(Math.random()*(max-min+1))+min);