import express from 'express'
import { authServices } from './auth.service'

const router = express.Router()

router.post('/login', authServices.loginUser)
router.post('/register', authServices.registerUser)

export const AuthRoutes = router
