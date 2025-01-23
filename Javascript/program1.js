console.log("Hello World")
console.log('Hello World')
console.log(`Hello World`)

age = 23
if(age<18){
    console.log("You can't vote");
}else{
    console.log("You can vote")
}

marks = 103  
//     49      68        83
//         fail  second    first     Disti 

if(marks < 40){
    console.log("Fail")
}else if(marks >= 40 && marks < 60){
    console.log("Pass with second class")
}else if(marks >= 60 && marks < 80){
    console.log("Pass with first class")
}else if(marks <= 100){
    console.log("Pass with Disti...")

}
// if(){
//     if(){
//         if(){

//         }
//     }
// }

day=8

switch(day){
    case 0:
        console.log("Monday")
        break;
    case 3:
        console.log("Thursday")
        break;

    case 5: 
    case 6:
        console.log("Saturday Sunday ==>> Holiday")
        break;
    case 4:
            console.log("Friday")
        break;
    default:
        console.log("End")
}
console.log(Date());
todate = new Date();
console.log(todate.getMonth())