
const getCurrent = async(req, res) => {
  const { email, id } = req.user
  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        id,
        email
      }
    }
  })
}

module.exports = getCurrent
