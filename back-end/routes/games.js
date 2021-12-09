const express = require('express');
const gameController = require('../controllers/game.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/', checkAuthMiddleware.checkAuth, gameController.save);
router.get('/', gameController.index);
router.get('/:id', gameController.show);
router.patch('/:id', checkAuthMiddleware.checkAuth, gameController.update);
router.post('/increase-played/:id', gameController.increasePlayed);
router.delete('/:id', checkAuthMiddleware.checkAuth, gameController.destroy);

module.exports = router;