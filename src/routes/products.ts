import express from "express"  // ESModules
import * as productServices from '../services/products.Services'

const router = express.Router()


router.get('/' , (_req , res) => {
    res.send(productServices.getProducts())
})

router.get('/:id' , (req , res) => {
    const product = productServices.findProductById(+req.params.id)

    return (product !== null )
    ? res.send(product)
    : res.send(404)
})
router.post('/' , (req , res) => {
    const { title , image , descripcion , details , price , stock , quantity_Sold , discount , favorite , categoria , brand } = req.body

    const newProduct = productServices.addProduct({
        title,
        image, 
        descripcion, 
        details, 
        price, 
        stock, 
        quantity_Sold, 
        discount, 
        favorite, 
        categoria, 
        brand
    }
    )

    res.json(newProduct)
})

export default router;