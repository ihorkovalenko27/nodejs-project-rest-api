const { User } = require('../../models')
const gravatar = require('gravatar')
const { Conflict } = require('http-errors')
const { nanoid } = require('nanoid')
const { sendEmail } = require('../../helpers')

const signup = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict(`${email} in use`)
  }
  const verificationToken = nanoid()
  const avatarURL = gravatar.url(email)
  const newUser = new User({ email, avatarURL, verificationToken })
  newUser.setPassword(password)
  await newUser.save()
  const mail = {
    to: email,
    subject: 'Confirm yor email',
    html: `<a 'target="_blank" href="http://localhost:3000/api/users/current/verify/${verificationToken}'> Confirm your email, please!</a>`,
  }
  await sendEmail(mail)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        password,
        email,
        avatarURL,
        verificationToken,
      }
    }
  })
}

module.exports = signup
