import { newUser } from '../types'


const parseUserName = (userNameFromRequest: any) : string => {
    if( !isString(userNameFromRequest) ){
        throw new Error('Incorrect or missing userName')
    }

    return userNameFromRequest;
}
const parseEmail = (emailFromRequest: any) : string => {
    if( !isString(emailFromRequest) ){
        throw new Error('Incorrect or missing email')
    }

    return emailFromRequest;
}
const parsePassword = (passwordFromRequest: any) : string => {
    if( !isString(passwordFromRequest) ){
        throw new Error('Incorrect or missing password')
    }

    return passwordFromRequest;
}

const isString = (string: string): boolean => {
    return typeof string === 'string'
}

const toNewUser = (object: any): newUser => {
    const newUser: newUser = {
        username: parseUserName(object.username),
        email: parseEmail(object.email),
        password: parsePassword(object.password)
    }
    return newUser
}

export default toNewUser;