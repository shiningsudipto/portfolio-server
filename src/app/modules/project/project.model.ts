import { model, Schema } from 'mongoose'
import { TProject } from './project.interface'

const projectSchema = new Schema<TProject>(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    description: { type: String, required: true },
    technology: { type: String, required: true },
    liveUrl: { type: String, required: true },
    clientRepo: { type: String, required: true },
    serverRepo: { type: String, required: true },
    tools: { type: String, required: true },
    serial: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
)

const ProjectModel = model<TProject>('Project', projectSchema)

export default ProjectModel
