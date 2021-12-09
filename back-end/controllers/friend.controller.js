const models = require('../models')
const Validator = require('fastest-validator')

const schema = {
    UserID: {type:"number", optional: true},
    FriendEmail: {type:"string", optional: true}
}

const v = new Validator();

function save(req, res){
    const friend = {
        UserID: req.body.UserID, 
        FriendEmail: req.body.FriendEmail
    }

    const validationResponse = v.validate(friend, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed!",
            errors: validationResponse
        });
    }

    models.User.findOne({where: {Email: req.body.FriendEmail}}).then(result => {
        if (result) {
            models.Friend.findOne({where: {UserID: req.body.UserID, FriendID: result.dataValues.id}}).then(result1 => {
                if (result1){
                    res.status(401).json({
                        message: "Already friend!"
                    });
                }
                else {
                    var newFriend = {
                        UserID: req.body.UserID, 
                        FriendID: result.dataValues.id,
                    }
                    models.Friend.create(newFriend).then (result1 => {
                        newFriend = {
                            UserID: result.dataValues.id, 
                            FriendID: req.body.UserID,
                        }
                        models.Friend.create(newFriend).then(result2 => {
                            res.status(201).json({
                                message: "Friend added successfully!"
                            });
                        });
                    });
                }
            })
        }
        else {
            res.status(401).json({
                message: "Friend email does not exist!"
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function index(req, res){
    models.Friend.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function show(req, res){
    const id = req.params.id;

    models.Friend.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Friend not found!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    });
}

function showByUserID(req, res){
    const userID = req.params.id;

    models.Friend.findAll({where: {UserID: userID}}).then(result => {
        if(result){
            var listFriends = [];
            result.forEach(friend => {
                models.User.findOne({where: {id: friend.dataValues.FriendID}}).then(user => {
                    const resultFriend = {
                        id: friend.dataValues.id,
                        UserID: friend.dataValues.UserID,
                        FriendID: friend.dataValues.FriendID,
                        FriendAvatar: user.dataValues.Avatar,
                        FriendEmail: user.dataValues.Email,
                        FriendFullName: user.dataValues.Full_name,
                        FriendGender: user.dataValues.Gender,
                        FriendDayOfBirth: user.dataValues.DayOfBirth,
                        createdAt: friend.dataValues.createdAt,
                        updatedAt: friend.dataValues.updatedAt
                    }
                    
                    listFriends.push(resultFriend);
                    
                    if (listFriends.length == result.length){
                        res.status(200).json({
                            message: "Get list friends successfully!",
                            post: listFriends
                        });
                    }
                });
            });
        }else {
            res.status(404).json({
                message: "User have no friend!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    });
}

function destroy(req, res){
    models.Friend.destroy({where:{UserID: req.body.UserID, FriendID: req.body.FriendID}}).then(result1 => {
        models.Friend.destroy({where:{UserID: req.body.FriendID, FriendID: req.body.UserID}}).then(result2 => {
            res.status(200).json({
                message: "Friend deleted successfully!"
            });
        })
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

module.exports = {
    save: save,
    index: index,
    show: show,
    showByUserID:showByUserID,
    destroy: destroy
}