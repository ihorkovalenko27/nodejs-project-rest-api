const shortid = require('shortid')

const updateContacts = require('./updateContacts')
const getAll = require('./getAll.js')

const add = async(data) => {
  const contacts = await getAll()
  const newProduct = { ...data, id: shortid.generate() }
  contacts.push(newProduct)
  await updateContacts(contacts)
  return newProduct
}

module.exports = add
