const express = require('express');
const adminController = require('../controllers/admin.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/create', adminController.create);
router.post('/login', adminController.login);
router.get('/get-current-admin', checkAuthMiddleware.checkAuth, adminController.getCurrentAdmin);
router.get('/', checkAuthMiddleware.checkAuth, adminController.index);
router.get('/:id', checkAuthMiddleware.checkAuth, adminController.show);
router.patch('/:id', checkAuthMiddleware.checkAuth, adminController.update);
router.delete('/:id', checkAuthMiddleware.checkAuth, adminController.destroy);
router.post("/forgot-password", adminController.forgot);
router.post("/change-password/:id", checkAuthMiddleware.checkAuth, adminController.changePassword);

module.exports = router;