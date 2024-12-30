import express from 'express'
import { blogControllers } from './blog.controller'
import { multerUpload } from '../../config/multer.config'
import { parseBody } from '../../middlewares/bodyParser'

const router = express.Router()

router.post(
  '/',
  multerUpload.single('cover'),
  parseBody,
  blogControllers.createBlog,
)
router.put(
  '/:id',
  multerUpload.single('cover'),
  parseBody,
  blogControllers.updateBlog,
)
router.get('/', blogControllers.getAllBlog)
router.get('/:slug', blogControllers.getSingleBlog)
router.delete('/', blogControllers.deleteBlog)

export const BlogRoutes = router
