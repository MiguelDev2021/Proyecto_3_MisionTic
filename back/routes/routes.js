const e = require("express");
const express = require("express");
const router = express.Router();
const ofertsController = require("../controllers/ofertsController");
const UsersController =  require("../controllers/UsersController");

//rutas de ofertas

router.get("/oferts", ofertsController.getAll);
router.get("/oferts/:code", ofertsController.getById);
router.post("/oferts", ofertsController.Create);
router.put("/oferts/:code", ofertsController.Update);
router.delete("/oferts/:code", ofertsController.Delete);
router.get("/oferts/code", ofertsController.Count);


// rutas usuarios 
router.post("/register", UsersController.Create);
router.get("/login/:correo", UsersController.getById);

module.exports = router;