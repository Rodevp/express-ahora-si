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

app.use((req, res) => { //en caso de no encontrar las rutas va tomar esta.
    res.status(404).send('not found')
})



app.listen(3000)