let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myBirthdate=new Date(2003,4,30,16)
//let myBirthdate=new Date("2003-05-30")
let myBirthdate=new Date("05-30-2003")
console.log(myBirthdate.toLocaleString());


console.log(myBirthdate.getTime());// from jan 1 to birthdate time in milisecond
console.log(Math.floor(myBirthdate.getTime()/1000));// converting milisecond to second