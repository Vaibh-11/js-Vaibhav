function calculateCartPrice1(num1) {
    return num1
}
console.log(calculateCartPrice1(200,1500,300,200))

//To get all values and store it into an array
function calculateCartPrice2(...num1) {
    return num1
}
console.log(calculateCartPrice2(200,1500,300,200))

// 200 =val1 and 1500=val2 rest in num1 as array
function calculateCartPrice3(val1,val2,...num1) {
    return num1
}
console.log(calculateCartPrice3(200,1500,300,200))

//Object function
const user={
    username:"vaibhav",
    price:1200
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)


myArr=[100,200,300,400]
function returnSecondArray(getArr) {
    return getArr[1]
}
console.log(returnSecondArray(myArr));