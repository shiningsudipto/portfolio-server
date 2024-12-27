import { TTechnology } from './technology.interface'
import TechnologyModel from './technology.model'

const createTechnologyIntoDB = async (payload: TTechnology) => {
  const result = await TechnologyModel.create(payload)
  return result
}
const getAllTechnologyFromDB = async () => {
  const result = await TechnologyModel.find()
  return result
}
const updateTechnologyIntoDB = async (
  id: string,
  payload: Partial<TTechnology>,
) => {
  const result = await TechnologyModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}
const deleteTechnologyFromDB = async (id: string) => {
  const result = await TechnologyModel.findByIdAndDelete(id)
  return result
}
export const technologyServices = {
  createTechnologyIntoDB,
  getAllTechnologyFromDB,
  updateTechnologyIntoDB,
  deleteTechnologyFromDB,
}
