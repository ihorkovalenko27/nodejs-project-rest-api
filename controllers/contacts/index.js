const getAll = require('./getContacts')
const getById = require('./getById')
const add = require('./addContact')
const updateById = require('./updateById')
const removeById = require('./removeById')
const updateStatusContact = require('./updateStatusContact')

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  removeById,
  updateStatusContact
}
