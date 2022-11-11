import { user , newUser } from '../types';
import usersData from './users.json';


const User: Array<user> = usersData as Array<user>
export const getUsers = () => User

export const findUserById = (id: Number): user | undefined => {
    const user = usersData.find(user => user.id === id )
    return user
}

export const addUser = (newUser: newUser): user  => {
    const newUserRegister = {
        id: Math.max( ...usersData.map(user => user.id )) + 1,
        ...newUser
    }
    User.push(newUserRegister)
    return newUserRegister
}