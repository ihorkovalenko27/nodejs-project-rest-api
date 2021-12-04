const { User } = require('../../models')
const { NotFound } = require('http-errors')

const updateSubscription = async (req, res) => {
  const { _id } = req.user
  const valueSubscription = ['starter', 'pro', 'business']
  const { subscription } = req.body
  const result = await await User.findByIdAndUpdate(_id, { subscription }, { new: true })
  if (!subscription || !valueSubscription.includes(subscription)) {
    throw new NotFound('Wrong value or missing field subscription')
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = updateSubscription
