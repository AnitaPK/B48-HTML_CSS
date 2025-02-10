const express = require('express')
const projectRoutes = require('./routes/projectRoute')
const connectDB = require('./config/db')


require('dotenv').config()
port = process.env.PORT || 7001

const app = express()

app.use(express.static('public'))

connectDB();

app.use('/api/project',projectRoutes)

// app.get('/home',(req,res)=>{
//     res.send('We started server with express')
// })

// app.get('/about',(req, res)=>{
//     res.send('this is about Us Page')
// })

// app.get('/contact',(req, res)=>{
//     res.send('this is contact page')
// })

app.listen(port, ()=>{
    console.log(`serevr running on http://localhost:${port}`)
})