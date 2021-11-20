const getAll = require('./getAll')
const getById = require('./getContactById')
const add = require('./addContact')
const updateById = require('./updateById')
const removeById = require('./removeContact')

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  removeById
}
