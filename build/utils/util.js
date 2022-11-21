"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseUserName = (userNameFromRequest) => {
    if (!isString(userNameFromRequest)) {
        throw new Error('Incorrect or missing userName');
    }
    return userNameFromRequest;
};
const parseEmail = (emailFromRequest) => {
    if (!isString(emailFromRequest)) {
        throw new Error('Incorrect or missing email');
    }
    return emailFromRequest;
};
const parsePassword = (passwordFromRequest) => {
    if (!isString(passwordFromRequest)) {
        throw new Error('Incorrect or missing password');
    }
    return passwordFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const toNewUser = (object) => {
    const newUser = {
        username: parseUserName(object.username),
        email: parseEmail(object.email),
        password: parsePassword(object.password)
    };
    return newUser;
};
exports.default = toNewUser;
