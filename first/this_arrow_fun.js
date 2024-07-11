const ob={
    username:"vaibhav",
    age:21,
    
    greeting:function() {
        console.log(`${this.username},Welcome to my website`);
        console.log(this);
    }
}
ob.greeting();
ob.username="gazal"
ob.greeting()
console.log(this);

// Differnt ways to write arrow function 
//1st
const addtwo=(num1,num2)=>{
return num1+num2
}
console.log(addtwo(3,4));
//2nd
const addone=(num1,num2)=>(num1+num2)
console.log(addone(1,2));


//
const greet=()=>{
username:"vaibhav"
}
console.log(greet());

//for using object in arrow we write like this
const greet2=()=>({
    username:"vaibhav"
})
console.log(greet2());