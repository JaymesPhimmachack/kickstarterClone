import { Request, Response } from "express"
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
	const createdProject = await createProject(req.body)

	res.status(201).json(createdProject)
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

	const updatedProject = await updateProject(req.params.id, req.body)

	res.status(200).json(updatedProject)
}

//@desc Delete a project by id
//@route DELETE /api/projects/:id
//@access Private
export const deleteProjectHandler = async (req: Request, res: Response) => {
	await deleteProject(req.params.id)

	res.status(200).json({ message: `Project ${req.params.id} deleted`})
} 