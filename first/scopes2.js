function one() {
    const username="vaibhav"

    function two() {
        const website="youtube"
        console.log(username); // child can access the varible of parent
    }
    //console.log(website); //parent cannot access the varible of child fun
    two()
}
one()

//It will be executed and give no error it can be run before declaration
addone(6)
function addone(num) {
    return num+1
}

//It will not been executed and will give error it cannot be run before declaration
addtwo(6)
const addtwo=function(num){
return num+2
}