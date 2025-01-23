arr1 = []
fruits = ['Mango', 'Banana','Apple']
fruits[3]='Pineapple'
console.log(fruits)
fruits.push('Chickoo')
console.log(fruits)
fruits.unshift('Watermelon')
console.log(fruits)
fruits.splice(2,1,'Jackfruit')
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.shift()
console.log(fruits)

const subFruits = fruits.slice(1,3)
console.log(fruits)
console.log(subFruits)
console.log(fruits[3])

len =fruits.length;
for(i=0;i<len;i++){
    console.log(fruits[i])
}

for (let value of fruits){
    console.log(value)
}

for(let i in fruits){
    console.log("Eat " +fruits[i]+ " "+ i +
         " Times")
}

fruits.forEach((element)=>console.log(element,"is a fruit"))

fruits.map((fruit,index)=>console.log(`${fruit} in at ${index} index`))

// find second largest number from given array 
arr1 = [-3,-56,-87,-25,-7]
largestNumber = -Infinity;
secondLargest = -Infinity;
console.log(largestNumber,secondLargest, "Before")
for(let n of arr1){
    if(n>largestNumber){
        secondLargest= largestNumber
        largestNumber = n
    }else if(n > secondLargest && n != largestNumber){
        secondLargest = n;
    }
}
console.log(largestNumber,secondLargest, "after")

// Create a program to reverse an array manually.
// Implement a manual version of the includes method.

console.log(fruits.includes('Kiwi'))
console.log(fruits.indexOf('Apple'))
console.log(fruits.indexOf('Kiwi'))
