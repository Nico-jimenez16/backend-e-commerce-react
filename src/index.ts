import express from 'express';
let cors = require("cors");

// ! importamos rutas
import users from './routes/users'
import products from './routes/products'


const app = express()
app.use(express.json())
app.use(cors())

const PORT = 8080

app.get('/',(_req , res ) => {
    res.send('La pagina de Inicio')
})

app.use('/api/users' , users)
app.use('/api/products' , products)

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`)
})