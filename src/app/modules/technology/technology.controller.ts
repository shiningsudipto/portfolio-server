import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { technologyServices } from './technology.service'

const createTechnology = catchAsync(async (req, res) => {
  const payload = req.body

  const result = await technologyServices.createTechnologyIntoDB(payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Technology created successfully',
    data: result,
  })
})

const getAllTechnology = catchAsync(async (req, res) => {
  const result = await technologyServices.getAllTechnologyFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Technology retrieved successfully',
    data: result,
  })
})

const updateTechnology = catchAsync(async (req, res) => {
  const { id } = req.params
  const payload = req.body

  const result = await technologyServices.updateTechnologyIntoDB(id, payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Technology updated successfully',
    data: result,
  })
})

const deleteTechnology = catchAsync(async (req, res) => {
  const id = req.body.id
  const result = await technologyServices.deleteTechnologyFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Technology deleted successfully',
    data: result,
  })
})

export const technologyControllers = {
  createTechnology,
  getAllTechnology,
  updateTechnology,
  deleteTechnology,
}
