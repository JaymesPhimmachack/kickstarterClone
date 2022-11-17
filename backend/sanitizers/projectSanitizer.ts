import { ProjectType } from "../types/projectTypes";
import HttpException from "../utils/httpException";

export function sanitizeProject(project: ProjectType): ProjectType {
	let sanitizeProject= <ProjectType>{}
	sanitizeProject.title = sanitizeTitle(project.title)
	//sanitizeProject.description = sanitizeTitle(project.description)

	return sanitizeProject
}

function sanitizeTitle(title: string): string {
	if (title === undefined) throw new HttpException('Title is undefined', 400)

	if (typeof title !== 'string') throw new HttpException('Title is not string', 400)

	title = title.trim()

	if (title.length < 3) throw new HttpException('Title must be at least 3 characters', 400)

	if (title.length > 50) throw new HttpException('Title must be less than 50 characters', 400)

	return title
}