const express = require('express')
const router = express.Router()
const { validation, ctrlWrapper } = require('../../middlewares')
const { joiSchema, joiFavoriteSchema } = require('../../models/contact')
const { contacts: ctrl } = require('../../controllers')
const validateMiddleware = validation(joiSchema)

router.get('/', ctrlWrapper(ctrl.getAll))

router.get('/:id', ctrlWrapper(ctrl.getById))

router.post('/', validateMiddleware, ctrlWrapper(ctrl.add))

router.put('/:id', validation(joiSchema), ctrlWrapper(ctrl.updateById))

router.patch('/:id/favorite', validation(joiFavoriteSchema), ctrlWrapper(ctrl.updateStatusContact))

router.delete('/:id', ctrlWrapper(ctrl.removeById))

module.exports = router
