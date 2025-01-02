import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorhandler'
import notFound from './app/middlewares/notFound'
const app: Application = express()

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: [
      'https://sd-portfolio-admin.netlify.app',
      'https://sudiptadas.netlify.app',
      'http://localhost:3000',
      'http://localhost:5173',
    ],
    credentials: true,
  }),
)

// application routes
app.use('/api', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Sudipta das portfolio Running!')
})
app.use(globalErrorHandler)

//Not Found
app.use(notFound)

export default app
