import { checkIsValidObjectId } from "../database/db"
import ProjectModel from "../models/projectModel"
import { sanitizeProject } from "../sanitizers/projectSanitizer"
import { IProjectSchema } from "../schema/projectSchema"
import { ProjectType } from "../types/projectTypes"

export async function getProjects(): Promise<ProjectType[]> {
	try {
		const projects = await ProjectModel.find()
		if(!projects) throw new Error('Projects not found')

		return projects
	} catch (error) {
		throw new Error(`Failed to find projects ${error}`)
	}
}

export async function createProject(project: ProjectType): Promise<ProjectType> {
	const sanitizedProject = sanitizeProject(project)
	try {
		const newProject = await ProjectModel.create(sanitizedProject)
		if (!newProject) throw new Error('Project not created')
		return newProject
	} catch (error) {
		throw new Error(`Failed to create project ${error}`)
	}
	
}


export async function getProjectById (projectId: string): Promise<IProjectSchema> {
	checkIsValidObjectId(projectId)
	try {
		const project = await ProjectModel.findById(projectId)
		if (!project) throw new Error('Project not found')
	
		return project
	} catch (error) {
		throw new Error(`Failed to find project ${error}`)
	}
}


export async function updateProject(projectId: string, project: ProjectType): Promise<IProjectSchema> {
	checkIsValidObjectId(projectId)
	const sanitizedProject = sanitizeProject(project)
	try {
		const updatedProject = await ProjectModel.findByIdAndUpdate(projectId, sanitizedProject, { new: true })

	if (!updatedProject) throw new Error('Project not found')

	return updatedProject
	} catch (error) {
		throw new Error(`Failed to update project ${error}`)
	}
}


export async function deleteProject(projectId: string): Promise<void> {
	checkIsValidObjectId(projectId)
	try {
		const project = await ProjectModel.findByIdAndDelete(projectId)
		if (!project) throw new Error('Project not found')
	
		return;
	} catch (error) {
		throw new Error(`Failed to delete project ${error}`)
	}
} 