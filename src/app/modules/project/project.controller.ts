import httpStatus from 'http-status'
import { TImageFile } from '../../interface/image.interface'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { projectServices } from './project.service'

const createProject = catchAsync(async (req, res) => {
  const postInfo = req.body
  const file = req.file as TImageFile
  //   const files = req.files as TImageFiles
  // const filePaths = files?.images?.map((file) => `/uploads/${file.filename}`)
  //   const filePaths = files?.images?.map((file: TImageFile) => file.path)
  const filePaths = file?.path

  const payload = {
    ...postInfo,
    img: filePaths,
  }

  const result = await projectServices.createProjectIntoDB(payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project created successfully',
    data: result,
  })
})

const getSingleProject = catchAsync(async (req, res) => {
  const { slug } = req.params
  const result = await projectServices.getSingleProjectFromDB(slug)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project retrieved successfully',
    data: result,
  })
})

const getAllProject = catchAsync(async (req, res) => {
  const result = await projectServices.getAllProjectsFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project retrieved successfully',
    data: result,
  })
})

const updateProject = catchAsync(async (req, res) => {
  const { id } = req.params
  const productInfo = req.body
  const file = req.file as TImageFile
  const imagePath = file?.path

  const payload = {
    ...productInfo,
    ...(imagePath ? { img: imagePath } : {}),
  }

  const result = await projectServices.updateProjectIntoDB(id, payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project updated successfully',
    data: result,
  })
})

const deleteProject = catchAsync(async (req, res) => {
  const id = req.body.id
  const result = await projectServices.deleteProjectFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  })
})

export const projectControllers = {
  createProject,
  getSingleProject,
  getAllProject,
  updateProject,
  deleteProject,
}
