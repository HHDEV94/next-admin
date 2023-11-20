import { Product, User } from './models'
import { connectDB } from './utils'

// Fetch all users and products ------------------------------------------ ||
export const fetchUsers = async (q, page) => {
  const ITEM_PER_PAGE = 10
  const regex = new RegExp(q, 'i') // 'i' -> it allows case insensitive.

  try {
    connectDB()
    const count = await User.find({ username: { $regex: regex } }).count()
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
    return { count, users }
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch users!')
  }
}

export const fetchProducts = async (q, page) => {
  const ITEM_PER_PAGE = 10
  const regex = new RegExp(q, 'i') // 'i' -> it allows case insensitive.

  try {
    connectDB()
    const count = await Product.find({ title: { $regex: regex } }).count()
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
    return { count, products }
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch products!')
  }
}

// Fetch just one user and product ---------------------------------------------||

export const fetchUser = async id => {
  try {
    connectDB()

    const user = await User.findById(id)
    return user
  } catch (error) {
    throw new Error('Failed to find user!')
  }
}

export const fetchProduct = async id => {
  try {
    connectDB()

    const product = await Product.findById(id)
    return product
  } catch (error) {
    throw new Error('Failed to find product!')
  }
}
