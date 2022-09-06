const express = require('express')
const app = express()

//para que entienda express los formatos
app.use(express.text()) //entiende texto
app.use(express.json()) //entiende json
app.use(express.urlencoded({extended: false})) //entiende datos del formulario

/**
 * 
 * MIDDLEWARES - SON FUNCIONES ESPECIFICAS EN EXPRESS POR LAS CUALES PODEMOS
 * HACER ALGO ANTES DE QUE LA RUTA EN ESPECIFICO O TODAS RECIBAN UNA PETICIÓN
 * 
 * FLUJO NORMA
 * 
 * CLIENTE -----> ENDPOINT SERVER
 * CLIENTE <----- ENPOINT SERVER
 * 
 * MIDDLEWARE
 * CLIENTE ----> MIDDLEWARE ---> ENDPOINT SERVER
 * CLIENTE <--------------------- ENDPOINT SERVER
 * 
 * 
 */

//middlware especifico
function isLogin(req, res, next) {
    console.log('login a')
    next()
}


//use - utiliza middlewares - se crea antes de cualquier ruta
app.use((req, res, next) => {
    console.log('route: ', req.url, 'method: ', req.method)
    next() //para que continue el flujo normal
})


app.get('/', (req, res) => {
    res.send('holi')
})

//el arreglo va ejecutandose en orden
app.get('/dashboard', [isLogin],(req, res) => {

})

app.get('/profile', (req, res) => {
    res.send('profile')
})



app.listen(3000, () => {
    console.log('server on')
})