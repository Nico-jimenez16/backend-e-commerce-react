import { product , newProduct} from '../types'
import productsData from './products.json'

const Product: Array< product > = productsData as Array< product >
export const getProducts = () => Product

export const findProductById = (id: Number): product | undefined => {
    const product = productsData.find(product => product.id === id )
    return product
}

export const addProduct = ( newProduct: newProduct  ): product => {
    const newProductRegister = {
        id: Math.max( ...productsData.map(user => user.id )) + 1,
        ...newProduct
    }
    Product.push(newProductRegister)
    return newProductRegister
}