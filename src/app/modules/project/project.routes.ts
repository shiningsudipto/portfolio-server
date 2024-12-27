import express from 'express'
import { projectControllers } from './project.controller'
import { parseBody } from '../../middlewares/bodyParser'
import { multerUpload } from '../../config/multer.config'

const router = express.Router()

router.post(
  '/',
  multerUpload.single('img'),
  parseBody,
  projectControllers.createProject,
)
router.put('/', projectControllers.updateProject)
router.get('/', projectControllers.getAllProject)
router.get('/:slug', projectControllers.getSingleProject)
router.delete('/', projectControllers.deleteProject)

export const ProjectRoutes = router
