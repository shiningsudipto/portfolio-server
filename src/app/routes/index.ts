import { Router } from 'express'
import { ProjectRoutes } from '../modules/project/project.routes'
import { BlogRoutes } from '../modules/blog/blog.routes'
import { ExperienceRoutes } from '../modules/experience/experience.routes'
import { technologyRoutes } from '../modules/technology/technology.routes'

const router = Router()

const moduleRoutes = [
  {
    path: '/project',
    route: ProjectRoutes,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
  {
    path: '/experience',
    route: ExperienceRoutes,
  },
  {
    path: '/technology',
    route: technologyRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
