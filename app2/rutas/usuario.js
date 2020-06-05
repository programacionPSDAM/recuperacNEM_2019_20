const express = require('express')
const router = express.Router()
const userController = require('../controlador/usuario')
router.post('/registro', userController.crear)
router.post('/autenticar', userController.autenticar)
module.exports = router