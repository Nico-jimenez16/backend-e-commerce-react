import express from "express"  // ESModules
import * as userServices from '../services/usersServices'
import toNewUser from "../utils/util"

const router = express.Router()


router.get('/' , (_req , res) => {
    res.send(userServices.getUsers())
})

router.get('/:id' , (req , res) => {
    const user = userServices.findUserById(+req.params.id)

    return (user !== null )
    ? res.send(user)
    : res.send(404)
})

router.post('/' , (req , res) => {
    try {
        const newUser = toNewUser(req.body)

        const addUser = userServices.addUser(newUser)
        res.json(addUser)

    } catch (e) {
        res.status(400).send(e.message)
    }
})


export default router;