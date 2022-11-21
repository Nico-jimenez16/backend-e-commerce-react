"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.findProductById = exports.getProducts = void 0;
const products_json_1 = __importDefault(require("./products.json"));
const Product = products_json_1.default;
const getProducts = () => Product;
exports.getProducts = getProducts;
const findProductById = (id) => {
    const product = products_json_1.default.find(product => product.id === id);
    return product;
};
exports.findProductById = findProductById;
const addProduct = (newProduct) => {
    const newProductRegister = Object.assign({ id: Math.max(...products_json_1.default.map(user => user.id)) + 1 }, newProduct);
    Product.push(newProductRegister);
    return newProductRegister;
};
exports.addProduct = addProduct;
