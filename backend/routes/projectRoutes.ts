import { createProjectHandler, deleteProjectHandler, getProjectHandler, getProjectsHandler, updateProjectHandler } from "../controllers/projectController"

import express from 'express'
const router = express.Router()

router.route('/')
.get(getProjectsHandler)
.post(createProjectHandler)

router.route('/:id')
.get(getProjectHandler)
.put(updateProjectHandler)
.delete(deleteProjectHandler)

export default router
