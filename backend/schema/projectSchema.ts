import { ProjectType } from "../types/projectTypes"
import { Schema } from "mongoose";

export interface IProjectSchema extends ProjectType {
	_id: string;
}

const projectSchema = new Schema<ProjectType>({
	title: { type: String, required: true, unique: true }
}, { timestamps: true })


export default projectSchema