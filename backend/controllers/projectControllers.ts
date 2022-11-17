import { Request, Response } from "express"
import mongoose from "mongoose"
import { checkIsValidObjectId } from "../database/db"
import ProjectModel from "../models/projectModel"
import { createProject, deleteProject, getProjectById, getProjects, updateProject } from "../services/projectService"

//@desc Get all projects
//@route GET /api/projects
//@access Public
export const getProjectsHandler = async (req: Request, res: Response) => {
	const projects = await getProjects()
	res.status(200).json(projects)
}

//@desc Create a new project
//@route POST /api/projects
//@access Private
export const createProjectHandler = async (req: Request, res: Response) => {
	if (!req.body.title) {
		res.status(400)
		throw new Error('Title is required')
	}
	const project = await createProject(req.body)

	res.status(201).json(project)
}

//@desc Get a project by id
//@route GET /api/projects/:id
//@access Public
export const getProjectHandler = async (req: Request, res: Response) => {
	
	const project = await getProjectById(req.params.id)

	res.status(200).json(project)
}

//@desc Update a project by id
//@route PUT /api/projects/:id
//@access Private
export const updateProjectHandler = async (req: Request, res: Response) => {
	if (!req.body.title) {
		res.status(400)
		throw new Error('Title is required')
	}

	const project = await updateProject(req.params.id, req.body)

	res.status(200).json(project)
}

//@desc Delete a project by id
//@route DELETE /api/projects/:id
//@access Private
export const deleteProjectHandler = async (req: Request, res: Response) => {
	const project = await deleteProject(req.params.id)

	res.status(200).json({ message: `Project ${req.params.id} deleted`, project})
} 