import { Request, Response } from "express"
import { createUser, deleteUser, getUserById, getUsers, loginUser, updateUser } from "../services/userService"

//@desc Get all users
//@route GET /api/users
//@access Public
export const getUsersHandler = async (req: Request, res: Response) => {
	const users = await getUsers()
	res.status(200).json(users)
}

//@desc Create a new user
//@route POST /api/users
//@access Public
export const loginUserHandler = async (req: Request, res: Response) => {
	const user = await loginUser(req.body.email, req.body.password)
	res.status(200).json(user)
}

//@desc Create a new user
//@route POST /api/users
//@access Private
export const createUserHandler = async (req: Request, res: Response) => {
	const createdUser = await createUser(req.body)

	res.status(201).json(createdUser)
}

//@desc Get a user by id
//@route GET /api/users/:id
//@access Public
export const getUserHandler = async (req: Request, res: Response) => {
	
	const user = await getUserById(req.params.id)

	res.status(200).json(user)
}

//@desc Update a user by id
//@route PUT /api/users/:id
//@access Private
export const updateUserHandler = async (req: Request, res: Response) => {

	const updatedUser = await updateUser(req.params.id, req.body)

	res.status(200).json(updatedUser)
}

//@desc Delete a user by id
//@route DELETE /api/users/:id
//@access Private
export const deleteUserHandler = async (req: Request, res: Response) => {
	await deleteUser(req.params.id)

	res.status(200).json({ message: `User ${req.params.id} deleted`})
} 