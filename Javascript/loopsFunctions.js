

// for(initialize;condition; incre/decre){}
// for(i=1;i<=10;i++){
//     console.log("3 * " + i + " = " + 3*i)
// }

// i=1

// while(i<=10){
//     if(i==5){
//     continue;
//     }
//     console.log("5 * " + i + " = " + 3*i)
//     i++
// }
// console.log(i)
// i=1
// do{
//     console.log("3 * " + i + " = " + 3*i)
//     i++
// }while(i<=10)

function addition(){
    console.log(2+3);
}
addition();

function greet(){
    console.log("Hello Batch 48")
}
greet()

function additionUser(x,y){
    console.log(x+y)
}
additionUser(11,33)

function addUser(x,y){
    return x+y
}
res1 = addUser(1,2)
console.log(res1);

(function(){console.log("Hello ....")})()

// arrow function 

add1 = ()=> console.log(4+5)
add1()

addPara = (a,b) => console.log(a+b)
addPara(7,8)

addReturn = (a,b,c) => a+b+c

res2 = addReturn(4,5,6)
console.log(res2)

addMultiReturn = (a,b,c) =>{
    r1 = a+b;
    return r1+c
}
console.log(addMultiReturn(1,2,3))

str1 = "wisdom"
str2 = 'Sprouts'
str = `Wisdom Sprouts IT Taining Hub`

str3 = str1+" "+str2;
console.log(str3)
str4 = str1.concat(' ',str2)
console.log(str4)

console.log(str3.charAt(7))

console.log(str4.indexOf("S"))
console.log(str.lastIndexOf("it"))
//  includes

console.log(str4.toLowerCase())
console.log(str4.toUpperCase())

console.log(str.includes("uIT"))

console.log(str.length)