const { User } = require('../../models')
const { NotFound } = require('http-errors')
const { sendEmail } = require('../../helpers')

const repeatVerifyEmail = async(req, res) => {
  const { email } = req.body
  if (!email) {
    res.status(400).json({
      message: 'Missing required field email'
    })
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw NotFound()
  }
  if (user.verify) {
    res.status(400).json({
      message: 'Verification has already been passed'
    })
  }
  const mail = {
    to: email,
    subject: 'Confirm yor email',
    html: `<a 'target="_blank" href="http://localhost:3000/api/users/current/verify/${user.verificationToken}'> Confirm your email, please! </a>`,
  }
  await sendEmail(mail) ? res.status(200).json({ email, message: 'Verification email sent' }) : res.status(400).json({ message: 'Verification failed' })
}

module.exports = repeatVerifyEmail
