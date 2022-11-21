"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.findUserById = exports.getUsers = void 0;
const users_json_1 = __importDefault(require("./users.json"));
const User = users_json_1.default;
const getUsers = () => User;
exports.getUsers = getUsers;
const findUserById = (id) => {
    const user = users_json_1.default.find(user => user.id === id);
    return user;
};
exports.findUserById = findUserById;
const addUser = (newUser) => {
    const newUserRegister = Object.assign({ id: Math.max(...users_json_1.default.map(user => user.id)) + 1 }, newUser);
    User.push(newUserRegister);
    return newUserRegister;
};
exports.addUser = addUser;
