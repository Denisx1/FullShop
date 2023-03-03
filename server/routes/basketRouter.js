const Router = require("express");
const router = new Router();
const BasketController = require('../controllers/basketController.js')


router.post('/append', BasketController.append)
router.get('/getOne', BasketController.getOne)
// // router.put('/product/:Id/append', BasketController.append)
// // router.put('/product/:Id/increment', BasketController.increment)
// // router.put('/product/:Id/decrement', BasketController.decrement)
// // router.put('/product/:Id/remove', BasketController.remove)
// // router.put('/clear', BasketController.clear)
module.exports = router;
