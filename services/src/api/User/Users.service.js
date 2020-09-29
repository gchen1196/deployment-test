import { User } from './User.model.js'

export const createUser = async (firstName) => {
  const result = await User.create({ firstName })
  return result.getDataValue('firstName')
}