const Router = require('express');
const router = new Router()
const productController = require('../controller/productController')

router.post('/create', productController.create)
router.put('/update', productController.update)
router.delete('/delete', productController.delete)
router.get('/getAll', productController.getAll)

module.exports = router;