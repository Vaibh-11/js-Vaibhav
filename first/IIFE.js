//Imediate Invoke Function Expression
// we write
function chai(){
    console.log('DB Connected');
}
chai();
//We can alse write these as
(function chaii(name) {
    console.log(`DB,${name}`);
})('vaibhav')