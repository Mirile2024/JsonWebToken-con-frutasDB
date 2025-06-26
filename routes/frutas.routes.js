const router = require("express").Router();
const { getFrutas} = require("../controllers/frutas.controller");
const { verifyToken } = require("../middlewares/auth.middleware");

router.get("/", verifyToken, getFrutas);

module.exports = router;    