import { model, Schema } from 'mongoose'
import { TExperience } from './experience.interface'

const experienceSchema = new Schema<TExperience>(
  {
    position: { type: String, required: true },
    company: { type: String, required: true },
    companyUrl: { type: String },
    date: { type: String, required: true },
    current: { type: Boolean, default: false },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

const ExperienceModel = model<TExperience>('Experience', experienceSchema)

export default ExperienceModel
