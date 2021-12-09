const models = require('../models');
const path = require('path');

function uploadSingle(req, res){
    if(req.file.filename){
        if (!req.params.id){
            const id = req.userData.userId;
            const updateUser = {
                Avatar: id + path.extname(req.file.originalname)
            }

            models.User.update(updateUser, {where: {id:id}}).catch(error => {
                res.status(200).json({
                    message: "Something went wrong!",
                    error: error
                });
            });
        }
        
        res.status(201).json({
            message: "Image upload successfully!",
            url: req.file.filename
        });
    }
    else {
        res.status(500).json({
            message: "Something went wrong!"
        });
    }
}

function uploadMultiple(req, res){
    if (req.files.length <= 0) {
        res.status(201).json({
            message: "Upload files empty!"
        });
    }
    else{
        if (req.files.length > 10) {
            res.status(401).json({
                message: "Upload too many files!"
            });
        }
        else {
            const files = req.files;
            var url = [];
            const id = req.params.id
            var imgUrls = ""
            
            files.forEach(file => {
                url.push(file.filename);
                imgUrls += file.filename + " "
            });

            imgUrls = imgUrls.slice(0, -1);

            var updateGame = {
                GamePlayImage: imgUrls
            }

            models.Game.update(updateGame, {where: {id: id}}).catch(error => {
                res.status(200).json({
                    message: "Something went wrong!",
                    error: error
                });
            });

            res.status(201).json({
                message: "Upload complete!",
                url: url
            });
        }
    } 
}

module.exports = {
    uploadSingle: uploadSingle,
    uploadMultiple: uploadMultiple
}