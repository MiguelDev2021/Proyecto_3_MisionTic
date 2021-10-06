const express = require("express");
const router = express.Router();
const ofertsController = require("../controllers/ofertsController");
//rutas de ofertas

router.get("/oferts", ofertsController.getAll);
router.get("/oferts/:id", ofertsController.getById);
router.get("/oferts/:id", ofertsController.Create);
router.get("/oferts/:id", ofertsController.Read);
router.get("/oferts/:id", ofertsController.Update);
router.get("/oferts/:id", ofertsController.Delete);
module.exports = router;