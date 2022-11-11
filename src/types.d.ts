export type newProduct = Omit<product, 'id'>
export type newUser = Omit<user, 'id'>


export interface user {
    id: number,
    username: string,
    email: string,
    password: string   
}

export interface product {
    id: number,
    title: string,
    image: string,
    descripcion: string,
    details: string,
    price: number,
    stock: number,
    quantity_Sold: number,
    discount: number,
    favorite: boolean,
    categoria: string,
    brand: string
}
