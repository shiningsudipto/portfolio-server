import express from 'express'
import { blogControllers } from './blog.controller'

const router = express.Router()

router.post('/', blogControllers.createBlog)
router.put('/', blogControllers.updateBlog)
router.get('/', blogControllers.getAllBlog)
router.get('/:slug', blogControllers.getSingleBlog)
router.delete('/', blogControllers.deleteBlog)

export const BlogRoutes = router
