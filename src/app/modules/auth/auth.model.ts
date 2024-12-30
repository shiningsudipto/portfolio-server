import { Document, Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

export const USER_ROLE = {
  user: 'moderator',
  admin: 'admin',
} as const

export type TUserRole = keyof typeof USER_ROLE

export interface TUser extends Document {
  name: string
  role: 'admin' | 'moderator'
  email: string
  phone: string
  password: string
}

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    role: {
      type: String,
      enum: ['admin', 'moderator'],
      default: 'moderator',
      required: true,
    },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

export const isPasswordMatched = async function (
  plainTextPassword: string,
  hashedPassword: string,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword)
}

export const UserModel = model<TUser>('User', userSchema)
