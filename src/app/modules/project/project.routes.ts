import express from 'express'
import { projectControllers } from './project.controller'

const router = express.Router()

router.post('/', projectControllers.createProject)
router.put('/', projectControllers.updateProject)
router.get('/', projectControllers.getAllProject)
router.get('/:slug', projectControllers.getSingleProject)
router.delete('/', projectControllers.deleteProject)

export const ProjectRoutes = router
