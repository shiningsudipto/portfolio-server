import AppError from '../../errors/AppError'
import slugGenerator from '../../utils/slugGenerator'
import { TProject } from './project.interface'
import ProjectModel from './project.model'

const createProjectIntoDB = async (payload: TProject) => {
  const slug = slugGenerator(payload.title)
  const projectData = {
    ...payload,
    slug,
  }
  const result = await ProjectModel.create(projectData)
  return result
}
const getAllProjectsFromDB = async () => {
  const result = await ProjectModel.find()
  return result
}
const getSingleProjectFromDB = async (slug: string) => {
  const result = await ProjectModel.findOne({ slug })
  if (!result) {
    throw new AppError(404, 'Product not found!')
  }
  return result
}
const updateProjectIntoDB = async (id: string, payload: Partial<TProject>) => {
  const result = await ProjectModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}
const deleteProjectFromDB = async (id: string) => {
  const result = await ProjectModel.findByIdAndDelete(id)
  return result
}
export const projectServices = {
  createProjectIntoDB,
  getSingleProjectFromDB,
  getAllProjectsFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
}
