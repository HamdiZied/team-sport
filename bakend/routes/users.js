const express = require("express");
const router = express.Router();
const userController = require("../api/controllers/users");

router.post("/register", userController.create);
router.post("/authenticate", userController.authenticate);
router.put("/all", userController.getAll);
router.put("/:usersId", userController.getById);
router.get("/usersId", userController.updateById);
router.delete("/usersId", userController.deleteById);

module.exports = router;
