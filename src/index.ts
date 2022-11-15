import express from 'express'

// ! importamos rutas
import users from './routes/users'
import products from './routes/products'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8080

app.use('/api/users' , users)
app.use('/api/products' , products)

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`)
})