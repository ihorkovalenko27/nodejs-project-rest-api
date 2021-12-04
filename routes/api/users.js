const express = require('express')
const router = express.Router()

const { auth, validation, ctrlWrapper } = require('../../middlewares')
const { users: ctrl } = require('../../controllers')
const { joiSignUpSchema, joiLoginSchema, joiSubscriptionSchema } = require('../../models/user')

router.post('/signup', validation(joiSignUpSchema), ctrlWrapper(ctrl.signup))
router.post('/login', validation(joiLoginSchema), ctrlWrapper(ctrl.login))
router.get('/logout', auth, ctrlWrapper(ctrl.logout))
router.patch('/', auth, validation(joiSubscriptionSchema), ctrlWrapper(ctrl.updateSubscription))

module.exports = router
