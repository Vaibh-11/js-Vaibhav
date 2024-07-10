const syb=Symbol("myKey")
const jsUser={
    name:"Vaibhav",  //name which is key will automatically get converted in string
    age:21,
    [syb]:"myKey",
    "gender":"Male"
}

// We can access this in two ways 
console.log(jsUser.age);
console.log(jsUser.gender);
//Another Way
console.log(jsUser["age"]);
console.log(jsUser["gender"]);
console.log(typeof syb);
console.log(jsUser[syb]);


//To change 
jsUser.age=25
console.log(jsUser);
//Now if we want that no one can change than
//Object.freeze(jsUser)
jsUser.age=28
console.log(jsUser);

//Object Function
jsUser.greeting=function () {
    console.log("Hello js User");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());
jsUser.greetingTwo=function () {
    console.log(`Hello js User,${this.name}`);
}
console.log(jsUser.greetingTwo());