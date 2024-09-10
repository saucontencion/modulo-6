# con cariño para quien lea.
.--> primero preparamos el entorno <--.
## inicializar git y npm
    1. primero incializamos el proyecto tanto para git, como para npm, el administrador de paquetes de nodejs (nodejs = el entorno de ejecucion de js).
        - ejecutamos en el bash git init
        - seguido de git remote add origin "la ruta a tu repositorio
        - en la terminal de vsc ejecutamos npm init -y // esto  quiere decir a npm: inicia un archivo administrador de paquetes "package.json"  y a lo que tenga que responder, respondele -yes , como el nombre, la version la descripsion
        - se creara el archivo git y el archivo packjason
## agregar primer paquete externo que usaremos
    1. instalamos express
        - en la terminal ejecutamos npm install express
            1. se nos creara el archivo node_modules y package-lock.json

.--> segundo agregamos los recursos y archivos sobre lo que trabajaremos <--.
    1 creamos la carpeta public para los archivos que serviremos en el navegador
    2 en public agregar los recursos estaticos de infocap apoyo al desafio
        - corregimos src de las img agregando assets a la rutas
    3 creamos el archivo index.js
##  require express, indicamos puerto de escucha y levantamos servidor 
    (es autodescriptivo el subencabezado)
    {3} ejecutamos en la terminal "node index.js" para levantar el servidor

## servimos el archivo statico 
    servimos index.html para que se vea en localhost:3000
        - usamos el primer middleware. con app.use

## comenzamos con los requerimientos verdaderos del proyecto
1. La ruta: `/abracadabra/usuarios` debe devolver un JSON con un arreglo de nombres alojado en el servidor.
    - Creamos el JSON.
    - Creamos la escucha para la solicitud GET en la ruta `/abracadabra/usuarios`.
    - Usamos el método `json` del objeto `response`.

    __Recordemos que el objeto `response` contiene varios métodos como__:
    
    - `res.download()`
    - `res.end()`
    - `res.json()`
    - `res.jsonp()`
    - `res.redirect()`
    - `res.render()`
    - `res.send()`
    - `res.sendFile()`
    - `res.sendStatus()`
2. /abracadabra/juego/:usuario: A través de un middleware, verificar que el usuario
escrito como parámetro existe en el arreglo alojado en el servidor.
-- traduccion:
    " A través de un middleware" - creamos unn midleware con use para la ruta /abracadabra/juego/:usuario 
    "verificar que el usuario escrito como parámetro"- capturamos en una variable el parametro 
        __EL objeto request trae dentro los parametros__:
        - `req.paramas` 
        _esto sale de:_
        - `Route path: /users/:userId/books/:bookId
            Request URL: http://localhost:3000/users/34/books/8989
            req.params: { "userId": "34", "bookId": "8989" }`
    "verificar que usuario parámetro existe en el arreglo" - usa una condicion if para verificar.

