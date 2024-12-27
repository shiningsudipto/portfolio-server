import express from 'express'
import { technologyControllers } from './technology.controller'

const router = express.Router()

router.post('/', technologyControllers.createTechnology)
router.put('/', technologyControllers.updateTechnology)
router.get('/', technologyControllers.getAllTechnology)
router.delete('/', technologyControllers.deleteTechnology)

export const technologyRoutes = router
