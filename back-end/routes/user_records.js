const express = require('express');
const userRecordController = require('../controllers/user_record.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/', userRecordController.save);
router.get('/', userRecordController.index);
router.get('/get-by-game-id/:id', userRecordController.indexByGameID);
router.get('/get-by-user-id/:id', userRecordController.indexByUserID);
router.get('/:id', userRecordController.show);
router.patch('/:id', checkAuthMiddleware.checkAuth, userRecordController.update);
router.delete('/:id', checkAuthMiddleware.checkAuth, userRecordController.destroy);

module.exports = router;