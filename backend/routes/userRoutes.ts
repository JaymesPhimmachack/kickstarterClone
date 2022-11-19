import { createUserHandler, deleteUserHandler, getUserHandler, getUsersHandler, loginUserHandler, updateUserHandler } from "../controllers/userController"

import express from 'express'
const router = express.Router()

router.route('/')
.get(getUsersHandler)
.post(createUserHandler)

router.route('/login').post(loginUserHandler)

router.route('/:id')
.get(getUserHandler)
.put(updateUserHandler)
.delete(deleteUserHandler)

export default router
