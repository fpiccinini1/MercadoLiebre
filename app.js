const express = require('express')
const path = require('path')

const app = express()

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

app.listen(3000, () =>{
    console.log('sv up, port 3000')
})

app.get('/',(req, res)=>{
    res.sendfile(path.resolve(__dirname, './views/home.html'))
})