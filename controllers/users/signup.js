const { User } = require('../../models')
const gravatar = require('gravatar')
const { Conflict } = require('http-errors')

const signup = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict(`${email} in use`)
  }
  const avatarURL = gravatar.url(email)
  const newUser = new User({ email, avatarURL })
  newUser.setPassword(password)
  newUser.save()
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        password,
        email,
        avatarURL,
      }
    }
  })
}

module.exports = signup
