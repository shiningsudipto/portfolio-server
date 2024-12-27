import httpStatus from 'http-status'
import { TImageFile } from '../../interface/image.interface'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { blogServices } from './blog.service'

const createBlog = catchAsync(async (req, res) => {
  const postInfo = req.body
  const file = req.file as TImageFile
  const filePaths = file?.path

  const payload = {
    ...postInfo,
    cover: filePaths,
  }

  const result = await blogServices.createBlogIntoDB(payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog created successfully',
    data: result,
  })
})

const getSingleBlog = catchAsync(async (req, res) => {
  const { slug } = req.params
  const result = await blogServices.getSingleBlogFromDB(slug)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog retrieved successfully',
    data: result,
  })
})

const getAllBlog = catchAsync(async (req, res) => {
  const result = await blogServices.getAllBlogFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog retrieved successfully',
    data: result,
  })
})

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const productInfo = req.body
  const file = req.file as TImageFile
  const imagePath = file?.path

  const payload = {
    ...productInfo,
    ...(imagePath ? { cover: imagePath } : {}),
  }

  const result = await blogServices.updateBlogIntoDB(id, payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  })
})

const deleteBlog = catchAsync(async (req, res) => {
  const id = req.body.id
  const result = await blogServices.deleteBlogFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  })
})

export const blogControllers = {
  createBlog,
  getSingleBlog,
  getAllBlog,
  updateBlog,
  deleteBlog,
}
