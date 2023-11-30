const express = require('express')
const cors = require('cors')
const router = require('./src/routes/rutes')

const app = express()
app.use(cors())
app.use(express())
app.use(router)

app.listen(4000, () =>{
    console.log('Aplicação rodando na porta 4000')
})

app.get('/', (request, response) => {
    response.send("hello word")
})