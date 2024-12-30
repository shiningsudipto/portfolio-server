import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { isPasswordMatched, TUser, UserModel } from './auth.model'
import AppError from '../../errors/AppError'
import { createToken } from '../../utils/generateToken'
import config from '../../config'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body

  // Check if the user exists
  const user = (await UserModel.findOne({
    email: payload.email,
  })) as TUser | null
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!')
  }

  // Check if the password matches
  const isMatch = await isPasswordMatched(payload?.password, user.password)
  if (!isMatch) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password does not match')
  }
  const jwtPayload = {
    email: user.email,
    role: user.role,
    id: user._id,
  }

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Logged in successfully!',
    data: accessToken,
  })
})

const registerUser = catchAsync(async (req, res) => {
  const payload = await req.body

  const result = await UserModel.create(payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  })
})

export const authServices = {
  loginUser,
  registerUser,
}
