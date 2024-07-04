/*
Here it will convert it to number but we see that it will Show NaN
If we write "33" then it will convert it to 33 
but if we write "33ssw" then it will not convert it it will show you result as NaN
if we take true than it will convert into 1
and false will be convert into 0
//if we want to convert it to boolean 
"" if string empty will give false
"any value" will give true
*/
let score="12ws"
let valueInNum=Number(score)
console.log(typeof valueInNum);
console.log(valueInNum);

let isBool="true"
let isStr=String(isBool)
console.log(typeof isStr);