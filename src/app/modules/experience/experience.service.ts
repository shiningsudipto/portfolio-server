import { TExperience } from './experience.interface'
import ExperienceModel from './experience.model'

const createExperienceIntoDB = async (payload: TExperience) => {
  const result = await ExperienceModel.create(payload)
  return result
}
const getAllExperienceFromDB = async () => {
  const result = await ExperienceModel.find().sort({ serial: 1 })
  return result
}
const updateExperienceIntoDB = async (
  id: string,
  payload: Partial<TExperience>,
) => {
  const result = await ExperienceModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}
const deleteExperienceFromDB = async (id: string) => {
  const result = await ExperienceModel.findByIdAndDelete(id)
  return result
}
export const experienceServices = {
  createExperienceIntoDB,
  getAllExperienceFromDB,
  updateExperienceIntoDB,
  deleteExperienceFromDB,
}
