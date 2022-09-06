const express = require('express')
const app = express()


//metodos para que entienda express los formatos
app.use(express.text()) //entiende texto
app.use(express.json()) //entiende json
app.use(express.urlencoded({extended: false})) //entiende datos del formulario

app.get('/html', (req, res) => {
    res.sendFile('./views/http.html', {
        root: __dirname
    })
})

app.get('/', (req, res) => {
    res.send('Hello world') //send da más información en la respuesta
})

//metodos http

app.get('/users', (req, res) => {
    res.send('usuarios')
})

app.post('/users', (req, res) => {
    res.send('creando usuario')
})

app.put('/users', (req, res) => {
    res.send('actualizando usuario') 
})

app.patch('/users', (req, res) => {
    res.send('actualizando una parte del usuario') 
})

app.delete('/users', (req, res) => {
    res.send('eliminando usuario')
})

//objeto response
app.get('/response', (req, res) => {
    //responder archivos
    /**
     *  res.sendFile('./chelsea.jpg', {
            root: __dirname //raiz de nuestro disco
        })
     * 
     *
    */  
   res.json({
    message: "hola"
   })

})

app.get('/isAlive', (req, res) => {
    res.status(204) // todo bien, pero no devuelvo un contenido
})

//request

app.post('/product', (req, res) => {
    console.log(req.body) //contenido del cliente
    console.log(req.headers)
    res.send('product')
})

//params 
app.get('/user/:name', (req, res) => {
    console.log(req.params.name)
    res.send('params')
})

//params siempre es un string
app.get('/add/:x/:y', (req, res) => {
    console.log(req.params.x, req.params.y)
    const sum = Number(req.params.x + req.params.y)
    res.send(`suma ${sum}`)
})

//queries
app.get('/queries', (req, res) => {
    console.log(req.query) //devuelve un objeto
    res.send(`queries`)
})


app.use((req, res) => { //en caso de no encontrar las rutas va tomar esta.
    res.status(404).send('not found')
})



app.listen(3000, () => {
    console.log('server on')
})