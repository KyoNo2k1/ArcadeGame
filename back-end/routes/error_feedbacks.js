const express = require('express');
const errorFeedbackController = require('../controllers/error_feedback.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/', checkAuthMiddleware.checkAuth, errorFeedbackController.save);
router.get('/', errorFeedbackController.index)
router.get('/get-by-game-id/:id', errorFeedbackController.indexByGameID);
router.get('/get-by-user-id/:id', errorFeedbackController.indexByUserID);
router.get('/:id', errorFeedbackController.show);
router.patch('/:id', checkAuthMiddleware.checkAuth, errorFeedbackController.update);
router.delete('/:id', checkAuthMiddleware.checkAuth, errorFeedbackController.destroy);

module.exports = router;