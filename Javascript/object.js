const user ={
    fName:"Pranav",
    lName:"Kavade",
    age:20,
    fullName: function(){
        return this.fName + " " +this.lName
    },
    subjects:["HTML","CSS", "Javascript", "ReactJs"]
}
console.log(user.fName)
console.log(user['fName'])

// for(let val of user){
//     console.log(val)
// }

console.log(user.fullName())

user.subjects.map((sub)=>{
    console.log(sub)
})

strObject = JSON.stringify(user)
console.log(typeof(strObject))

objUser = JSON.parse(strObject)
console.log(typeof(objUser))

user.companyName = "Google"
user.age = 21



