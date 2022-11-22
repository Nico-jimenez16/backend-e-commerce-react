"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let cors = require("cors");
// ! importamos rutas
const users_1 = __importDefault(require("./routes/users"));
const products_1 = __importDefault(require("./routes/products"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
const PORT = 8080;
app.get('/', (_req, res) => {
    res.send('La pagina de Inicio');
});
app.use('/api/users', users_1.default);
app.use('/api/products', products_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
