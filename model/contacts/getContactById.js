const getAll = require('./getAll')

const getById = async(id) => {
  const contacts = await getAll()
  const result = contacts.find(item => item.id === Number(id))
  if (!result) {
    return null
  }
  return result
}

module.exports = getById
