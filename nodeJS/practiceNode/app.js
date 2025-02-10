const http = require('http')
const fs = require('fs')
require('dotenv').config()
const path = require('path')

const port = process.env.PORT || 5000

const server = http.createServer((req,res)=>{
    res.end('I have created Server.... With Batch48')
})

console.log("path *****",path.join(__dirname))

filePath = path.join(__dirname, 'demoText.txt')

fs.writeFileSync(filePath, `Welcome to NODEJS !!!! \n Hurrayyyyyyyyyyy`)

const data = fs.readFileSync('./demoText.txt', { encoding: 'utf8', flag: 'r' });
console.log(data);

server.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})