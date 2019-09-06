const express = require('express');
const router = express.Router();
const articleController = require('../api/controllers/article');
const upload = require('../middleware/articles/upload');

router.get('/', articleController.getAll);
router.post('/', upload.single('image'), articleController.create);
router.get('/:articleId', articleController.getById);
router.put('/:articleId', articleController.updateById);
router.delete('/:articleId', articleController.deleteById);

module.exports = router;