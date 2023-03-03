const Router = require("express");
const userController = require("../controllers/userController");
const userMiddleware = require('../middlewares/authMiddleware')
const router = new Router();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth",userMiddleware ,userController.check);
router.get('/check',userMiddleware, userController.checkIdUser)

module.exports = router;
