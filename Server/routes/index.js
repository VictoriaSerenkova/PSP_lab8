const Router = require('express');
const router = new Router()

const productRoute = require('./productRoute');

router.use('/product', productRoute);

module.exports = router;