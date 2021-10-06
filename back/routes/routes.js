const express = require("express");
const router = express.Router();
const ofertsController = require("../controllers/ofertsController");
//rutas de ofertas

router.get("/oferts", ofertsController.getAll);
router.get("/oferts/:code", ofertsController.getById);
router.post("/oferts", ofertsController.Create);
router.put("/oferts/:code", ofertsController.Update);
router.delete("/oferts/:code", ofertsController.Delete);
module.exports = router;