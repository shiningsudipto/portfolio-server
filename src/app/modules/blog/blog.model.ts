import { model, Schema } from 'mongoose'
import { TBlog } from './blog.interface'

const blogSchema = new Schema<TBlog>(
  {
    cover: { type: String },
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    content: { type: String, required: true },
    category: { type: String },
    author: { type: String, default: 'Sudipta Das' },
  },
  {
    timestamps: true,
  },
)

const BlogModel = model<TBlog>('Blog', blogSchema)

export default BlogModel
