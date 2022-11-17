import { createUserHandler, deleteUserHandler, getUserHandler, getUsersHandler, updateUserHandler } from "../controllers/userController"

import express from 'express'
const router = express.Router()

router.route('/')
.get(getUsersHandler)
.post(createUserHandler)

router.route('/:id')
.get(getUserHandler)
.put(updateUserHandler)
.delete(deleteUserHandler)

export default router
