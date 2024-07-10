const user={}
user.name="Vaibhav"
user.id="1234abc"
console.log(user);

const newUser={
    age:21,
    username:{
        fullname:{
            fname:"vaibhav",
            sname:"solanki"
        }
    }
}
console.log(newUser.username.fullname.sname);

//To add two object
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
//First and most used 
const obj4={...obj1,...obj2,}
console.log(obj4);
//Second 
const obj3=Object.assign({},obj1,obj2)
console.log(obj3);

//Value will come from the database
const users=[
    {
        id:123,
        name:"vaibhav",
    },
    {
       id:456,
       name:"bhoomi"
    },
    {
        id:678,
        name:"gazal"
    }
]
//To access it we write
console.log(users[2].name);

//Some Imp Methods
const newobj={
    name:"vaibhav",
    email:"solankivaibhav589@gmail.com",
    id:123
}
console.log(Object.keys(newobj));
console.log(Object.values(newobj));
console.log(Object.entries(newobj));
console.log(Object.hasOwnProperty('name'));