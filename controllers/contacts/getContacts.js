const { Contact } = require('../../models')

const getAll = async (req, res) => {
  const { _id } = req.user
  const { page = 1, limit = 20, favorite } = req.query
  const skip = (page - 1) * limit
  if (favorite) {
    const filteredContacts = await Contact.find({ owner: _id, favorite: true })
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: filteredContacts
      }
    })
  }
  const contacts = await Contact.find({ owner: _id }, '', { skip, limit: Number(limit) }).populate('owner', '_id email')
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts
    }
  })
}

module.exports = getAll
