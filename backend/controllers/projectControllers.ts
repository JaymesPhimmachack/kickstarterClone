import { Request, Response } from "express"
import mongoose from "mongoose"
import ProjectModel from "../models/projectModel"

//@desc Get all projects
//@route GET /api/projects
//@access Public
export const getProjects = async (req: Request, res: Response) => {
	const projects = await ProjectModel.find()
	res.json(projects)
}

//@desc Create a new project
//@route POST /api/projects
//@access Private
export const createProject = async (req: Request, res: Response) => {
	if (!req.body.title) {
		res.status(400)
		throw new Error('Title is required')
	}
	const project = await ProjectModel.create(req.body)
	if (!project) {
		res.status(400)
		throw new Error('Project not created')
	}
	res.status(201).json(project)
}

//@desc Get a project by id
//@route GET /api/projects/:id
//@access Public
export const getProject = async (req: Request, res: Response) => {
	if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
		res.status(400)
		throw new Error(`${req.params.id} is not a valid id`)
	}
	const project = await ProjectModel.findById(req.params.id)

	if (!project) {
		res.status(404)
		throw new Error('Project not found')
	}
	res.status(200).json(project)
}

//@desc Update a project by id
//@route PUT /api/projects/:id
//@access Private
export const updateProject = async (req: Request, res: Response) => {
	if (!req.body.title) {
		res.status(400)
		throw new Error('Title is required')
	}

	if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
		res.status(400)
		throw new Error(`${req.params.id} is not a valid id`)
	}
	const project = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

	if (!project) {
		res.status(404)
		throw new Error('Project not found')
	}

	res.status(200).json(project)
}

//@desc Delete a project by id
//@route DELETE /api/projects/:id
//@access Private
export const deleteProject = async (req: Request, res: Response) => {
	const project = await ProjectModel.findByIdAndDelete(req.params.id)

	if (!project) {
		res.status(404)
		throw new Error('Project not found')
	}
	res.status(200).json({ message: `Project ${req.params.id} deleted`, project})
} 