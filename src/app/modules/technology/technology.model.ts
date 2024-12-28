import { model, Schema } from 'mongoose'
import { TTechnology } from './technology.interface'

const technologySchema = new Schema<TTechnology>({
  category: { type: String, required: true },
  items: { type: [String], required: true },
  serial: { type: Number, required: true },
})

const TechnologyModel = model<TTechnology>('Technology', technologySchema)

export default TechnologyModel
