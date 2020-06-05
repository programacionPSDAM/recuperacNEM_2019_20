const express = require('express')
const router = express.Router()

// Require the controllers WHICH WE DID NOT CREATE YET!!
const producto_controlador = require('../controlador/producto')


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', producto_controlador.test)
router.get('/:id', producto_controlador.productoPorId)
router.get('/', producto_controlador.productoTodos)
router.delete('/:id', producto_controlador.borradoPorId)
router.put('/:id', producto_controlador.updatePorId);
router.post('/', producto_controlador.crear);


module.exports = router