const express = require('express');
const userController = require('../controllers/user.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/sign-up', userController.signUp);
router.get('/confirm-sign-up/:id', userController.confirmSignUp);
router.post('/login', userController.login);
router.get('/get-current-user', checkAuthMiddleware.checkAuth, userController.getCurrentUser);
router.get('/', checkAuthMiddleware.checkAuth, userController.index); 
router.get('/:id', checkAuthMiddleware.checkAuth, userController.show);
router.patch('/:id', checkAuthMiddleware.checkAuth, userController.update);
router.delete('/:id', checkAuthMiddleware.checkAuth, userController.destroy);
router.post("/forgot-password", userController.forgot);
router.get("/reset-password/:email", userController.resetPassword);
router.post("/change-password/:id", checkAuthMiddleware.checkAuth, userController.changePassword);

module.exports = router;