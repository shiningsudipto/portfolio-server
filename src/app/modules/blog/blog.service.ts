import AppError from '../../errors/AppError'
import slugGenerator from '../../utils/slugGenerator'
import { TBlog } from './blog.interface'
import BlogModel from './blog.model'

const createBlogIntoDB = async (payload: TBlog) => {
  const slug = slugGenerator(payload.title)
  const blogData = {
    ...payload,
    slug,
  }
  const result = await BlogModel.create(blogData)
  return result
}
const getAllBlogFromDB = async () => {
  const result = await BlogModel.find()
  return result
}
const getSingleBlogFromDB = async (slug: string) => {
  const result = await BlogModel.findOne({ slug })
  if (!result) {
    throw new AppError(404, 'Blog not found!')
  }
  return result
}
const updateBlogIntoDB = async (id: string, payload: Partial<TBlog>) => {
  const result = await BlogModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}
const deleteBlogFromDB = async (id: string) => {
  const result = await BlogModel.findByIdAndDelete(id)
  return result
}
export const blogServices = {
  createBlogIntoDB,
  getSingleBlogFromDB,
  getAllBlogFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
}
