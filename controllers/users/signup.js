const { User } = require('../../models')
const { Conflict } = require('http-errors')

const signup = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict(`${email} in use`)
  }
  const newUser = new User({ email })
  newUser.setPassword(password)
  newUser.save()
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        password,
        email
      }
    }
  })
}

module.exports = signup