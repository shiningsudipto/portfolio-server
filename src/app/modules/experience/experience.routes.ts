import express from 'express'
import { experienceControllers } from './experience.controller'

const router = express.Router()

router.post('/', experienceControllers.createExperience)
router.put('/:id', experienceControllers.updateExperience)
router.get('/', experienceControllers.getAllExperience)
router.delete('/', experienceControllers.deleteExperience)

export const ExperienceRoutes = router
