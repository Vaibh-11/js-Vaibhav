const add1=function(num1,num2){
console.log(num1+num2);
}
const res=add1(3,4)
console.log(res);



const add2=function(num1,num2){
return num1+num2
}
const result=add2(3,4)
console.log(result);


function loggin(username) {
    if(!username){
        console.log("please enter usernamer");
     return
    }
   return `${username} just logged in`
}
// console.log(loggin("vaibhav"));
console.log(loggin("vaibhab"));