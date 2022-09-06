const express = require('express')
const app = express()
const path = require('path')
const { route } = require('./router.js')
require('ejs') //se auto configura

//configuramos para que express entienda el template
app.set('view engine', 'ejs')
//configuramos para que express tenga una variable global
app.set('views', path.join(__dirname, 'views'))

//metodos para que entienda express los formatos
app.use(express.text()) //entiende texto
app.use(express.json()) //entiende json
app.use(express.urlencoded({extended: false})) //entiende datos del formulario

app.get('/', (req, res) => {
    res.render('hello', {name: 'lucas'})
})

//sin prefijo app.use(route)
app.use('/route', route) 

//app.use(express.static('./public')) accede sin prefijo
//recomendado ir de ultimo ya cuando haya leido todas las rutas
app.use('/public', express.static('./public')) //con prefijo


app.listen(3000, () => {
    console.log('server on')
})