const express = require('express')
const app = express()
 
const JSON = { "usuarios":[
    "Juan",
    "Joselyn",
    "Astrid",
    "Maria",
    "Ignacia",
    "javier",
    "brian"
]}
app.use(express.static('public'))
app.get("/abracadabra/usuarios",(req,res)=>{
    res.json(JSON)
})
app.use("/abracadabra/juego/:usuario", (req,res,next)=>{
    const usuario = req.params.usuario
    console.log(usuario);
    if (JSON.usuarios.includes(usuario)) {
        console.log('la condicion se cumplio');
        res.send('si existe papu')
    
    } else {
        res.send(' no existe my rey')
    };
    next();
})

app.listen(3000,()=>{
    //'en la terminal ejecuta node index.js para levantarme
    console.log('escuchando en el puerto 3000');       
})