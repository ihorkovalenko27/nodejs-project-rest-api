const sgMail = require('@sendgrid/mail')
require('dotenv').config()
const { Unauthorized } = require('http-errors')

const { SENDGRID_API_KEY } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const sendEmail = async(data) => {
  const email = { ...data, from: 'kovalyan27@gmail.com' }
  if (email) {
    await sgMail.send(email)
    return true
  }
  throw new Unauthorized('Email didn`t send')
}

module.exports = sendEmail
