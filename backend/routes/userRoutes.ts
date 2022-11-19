import { createUserHandler, deleteUserHandler, getUserHandler, getUsersHandler, loginUserHandler, updateUserHandler } from "../controllers/userController"

import express from 'express'
import { protect } from "../models/authMiddleware"
const router = express.Router()

router.route('/')
.get(protect, getUsersHandler)
.post(createUserHandler)

router.route('/login').post(loginUserHandler)

router.route('/:id')
.get(getUserHandler)
.put(protect, updateUserHandler)
.delete(protect, deleteUserHandler)

export default router
