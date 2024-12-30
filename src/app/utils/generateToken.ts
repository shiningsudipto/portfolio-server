import config from '../config'
import { TUser } from '../modules/auth/auth.model'

import jwt from 'jsonwebtoken'

export const createToken = (
  jwtPayload: { email: string; role: string },
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  })
}

export const generateToken = (user: TUser) => {
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
  return accessToken
}
