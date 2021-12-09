const express = require('express');
const categoryController = require('../controllers/category.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/', checkAuthMiddleware.checkAuth, categoryController.save);
router.get('/', categoryController.index);
router.get('/:id', categoryController.show);
router.patch('/:id', checkAuthMiddleware.checkAuth, categoryController.update);
router.delete('/:id', checkAuthMiddleware.checkAuth, categoryController.destroy);

module.exports = router;