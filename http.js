//modulo de la std library de node js.
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./views/http.html')
    read.pipe(res)
})

server.listen(3000)
console.log('server on port 3000')