import { createProject, deleteProject, getProject, getProjects, updateProject } from "../controllers/projectControllers"

const express = require('express')
const router = express.Router()

router.route('/')
.get(getProjects)
.post(createProject)

router.route('/:id')
.get(getProject)
.put(updateProject)
.delete(deleteProject)

export default router
