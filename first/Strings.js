let name="vaibhav";
let repoCount=4;

console.log("hello my name is "+name+"and my repoCount is "+repoCount);// old school 

//This is know as string interpolation
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); //modern techinique

//Anotherway to create String 
const gameName=new String('PowerRangers-spd-mistic')
console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.charAt(4));
console.log(gameName.indexOf('g'));

console.log(gameName.substring(0,4));
let sliceGame=gameName.slice(-8,-4);
console.log(sliceGame);

console.log("   vaibhav   ");
console.log("   vaibhav   ".trim());

let url="solanki/localhost/index%20php"
console.log(url.replace('%20','.'))
console.log(url.includes("php"));

console.log(gameName.split('-'));