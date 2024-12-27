import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { experienceServices } from './experience.service'

const createExperience = catchAsync(async (req, res) => {
  const payload = req.body

  const result = await experienceServices.createExperienceIntoDB(payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience created successfully',
    data: result,
  })
})

const getAllExperience = catchAsync(async (req, res) => {
  const result = await experienceServices.getAllExperienceFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience retrieved successfully',
    data: result,
  })
})

const updateExperience = catchAsync(async (req, res) => {
  const { id } = req.params
  const payload = req.body

  const result = await experienceServices.updateExperienceIntoDB(id, payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience updated successfully',
    data: result,
  })
})

const deleteExperience = catchAsync(async (req, res) => {
  const id = req.body.id
  const result = await experienceServices.deleteExperienceFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience deleted successfully',
    data: result,
  })
})

export const experienceControllers = {
  createExperience,
  getAllExperience,
  updateExperience,
  deleteExperience,
}
