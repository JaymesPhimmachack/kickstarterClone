import { createProjectHandler, deleteProjectHandler, getProjectHandler, getProjectsHandler, updateProjectHandler } from "../controllers/projectController"

import express from 'express'
import { protect } from "../models/authMiddleware"
const router = express.Router()

router.route('/')
.get(getProjectsHandler)
.post(protect, createProjectHandler)

router.route('/:id')
.get(getProjectHandler)
.put(protect, updateProjectHandler)
.delete(protect, deleteProjectHandler)

export default router
