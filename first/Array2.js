let arr1=[1,2,3,4]
let arr2=[5,6,7,8]

//arr1.push(arr2)
//console.log(arr1);//It will add arr2 element as an array as array can take aya datatype including array

//To access 7
//console.log(arr1[4][2]);

//seperate method
let narr=arr1.concat(arr2)
console.log(narr);

let nnarr=[...arr1,...arr2]
console.log(nnarr);

//flat
let array_new=[1,2,3,[4,5,6],6,7,[,5,9,[1,3]]]
console.log(array_new);
console.log(array_new.flat(Infinity));

//Used to covert or ask 
let a="vaibhav";
console.log(Array.isArray(a));
console.log(Array.from(a));

//Different Variable into a single array
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));