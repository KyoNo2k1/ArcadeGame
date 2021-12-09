const express = require('express');
const friendController = require('../controllers/friend.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/', checkAuthMiddleware.checkAuth, friendController.save);
router.get('/', friendController.index);
router.get('/:id', friendController.show);
router.get('/get-by-user-id/:id', friendController.showByUserID);
router.delete('/', checkAuthMiddleware.checkAuth, friendController.destroy);

module.exports = router;