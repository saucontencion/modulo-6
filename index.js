const express = require('express')
const app = express()

app.use(express.static('public'))




app.listen(3000,()=>{
    //'en la terminal ejecuta node index.js para levantarme
    console.log('escuchando en el puerto 3000');       
})