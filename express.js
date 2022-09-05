const express = require('express')
const app = express()

app.get('/html', (req, res) => {
    res.sendFile('./views/http.html', {
        root: __dirname
    })
})

app.get('/', (req, res) => {
    res.send('Hello world') //send da más información en la respuesta
})

//metodos http

app.get('/user', (req, res) => {
    res.send('usuarios')
})

app.post('/user', (req, res) => {
    res.send('creando usuario')
})

app.put('/user', (req, res) => {
    res.send('actualizando usuario') 
})

app.patch('/user', (req, res) => {
    res.send('actualizando una parte del usuario') 
})

app.delete('/user', (req, res) => {
    res.send('eliminando usuario')
})



app.use((req, res) => { //en caso de no encontrar las rutas va tomar esta.
    res.status(404).send('not found')
})



app.listen(3000)