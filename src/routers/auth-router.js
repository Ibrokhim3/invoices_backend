const { Router } = require("express");
const userCtr = require("../controllers/auth-controller");
const { userValidate } = require("../middlewares/validation-middleware");

const router = Router();

router.post("/login", userCtr.LOGIN);
router.post("/signup", userValidate, userCtr.SIGNUP);

module.exports = router;
