// Premitive Datatypes
// String,Numbers,Boolean,BigInt,Null,Undefine,Symbol

// const email=undefined
// email=10
// console.log(email);

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);
console.log(id);
console.log(anotherid);


//Non Premitive or Refernce Type
//Arrays,Object,Functions
const bhagwan=["Krishna bhagwan","Ram bhagwan","Hanuman bhagwan"]

const me={
    name:"Vaibhav",
    age:32
}

const myFun=function(){
    console.log("Hello");
}