const express = require('express');
const router = express.Router();
const clubControllers = require('../api/controllers/club');
const upload = require('../middleware/club/upload');

router.get('/', clubControllers.getAll);
router.post('/', upload.single('image'), clubControllers.create);
router.get('/:clubId', clubControllers.getById);
router.put('/:clubId', clubControllers.updateById);
router.delete('/:clubId', clubControllers.deleteById);

module.exports = router;