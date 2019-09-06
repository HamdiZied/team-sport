const express = require("express");
const router = express.Router();
const newControllers = require("../api/controllers/news");
const upload = require('../middleware/news/upload');

router.get("/", newControllers.getAll);
router.post("/",upload.single('image'), newControllers.create);
router.get("/:newId", newControllers.getById);
router.put("/:newId", newControllers.updateById);
router.delete("/:newId", newControllers.deleteById);

module.exports = router;
