const express = require('express');
const imageController = require('../controllers/image.controller');
const userImageUploader = require('../helpers/user-image-uploader');
const gameAvatarUploader = require('../helpers/game-avatar-uploader');
const gamePlayImageUploader = require('../helpers/game-play-image-uploader');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/upload/user', checkAuth.checkAuth, userImageUploader.upload.single('user-image'), imageController.uploadSingle);
router.post('/upload/games/avatar/:id', checkAuth.checkAuth, gameAvatarUploader.upload.single('game-avatar'), imageController.uploadSingle);
router.post('/upload/games/game-play-image/:id', checkAuth.checkAuth, gamePlayImageUploader.upload.array('game-play-image', 10), imageController.uploadMultiple);

module.exports = router;