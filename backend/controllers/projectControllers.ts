import { Request, Response } from "express"

//@desc Get all projects
//@route GET /api/projects
//@access Public
export const getProjects = (req: Request, res: Response) => {
	res.json({ message: 'Get All Projects'})
}

//@desc Create a new project
//@route POST /api/projects
//@access Private
export const createProject = (req: Request, res: Response) => {
	res.json({ message: 'Create a Project'})
}

//@desc Get a project by id
//@route GET /api/projects/:id
//@access Public
export const getProject = (req: Request, res: Response) => {
	res.json({ message: `Get Project ${req.params.id}`})
}

//@desc Update a project by id
//@route PUT /api/projects/:id
//@access Private
export const updateProject = (req: Request, res: Response) => {
	res.json({ message: `Update Project ${req.params.id}`})
}

//@desc Delete a project by id
//@route DELETE /api/projects/:id
//@access Private
export const deleteProject = (req: Request, res: Response) => {
	res.json({ message: `Delete Project ${req.params.id}`})
}