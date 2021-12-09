const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Validator = require('fastest-validator');
const nodemailer = require('nodemailer');

const schema = {
    Full_name: {type:"string", optional:true},
    Email: {type:"string", optional: true},
    Password: {type:"string", optional: true},
    Role: {type: "number", optional:true},
    Gender: {type:"number", optional:true},
    DayOfBirth: {type:"string", optional: true},
    Avatar: {type:"string", optional: true}
}

const v = new Validator();

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "ArcadeGameWebsite@outlook.com.vn", 
        pass: "arcade2001"
    }
})

async function signUp(req, res){
    try {
        const rUser = await models.User.findOne({where:{Email:req.body.Email}});
        const pUser = await models.Pending_user.findOne({where:{Email:req.body.Email}});

        if(rUser){
            return res.status(209).json({
                message: "This email has already signed up!"
            });
        }
        
        if(pUser){
            return res.status(209).json({
                message: "You have already registered! Please check your email to complete sign up!"
            });
        }

        bcryptjs.genSalt(10, function(err, salt){
            bcryptjs.hash(req.body.Password, salt, function(err, hash){
                const pending_user = {
                    Email: req.body.Email,
                    Password: hash,
                    Full_name: req.body.Full_name,
                    Gender: req.body.Gender
                }

                const validationResponse = v.validate(pending_user, schema);
                if(validationResponse !== true){
                    return res.status(400).json({
                        message: "Validation failed!",
                        errors: validationResponse
                    });
                }

                models.Pending_user.create(pending_user).then(result2 => {
                    sendConfirmSignUpEmail(result2.Email, result2.id);
                    res.status(201).json({
                        message: "Confirm sign up email sended! Please check your email to complete registration!"
                    });
                })
            });
        });
    } catch(error){
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    }
}

function sendConfirmSignUpEmail(email, pending_id){
    const options = {
        from: "ArcadeGameWebsite@outlook.com.vn",
        to: email,
        subject: "Confirm sign up for email: " + email,
        text: "Hello " + email + ", you have just sign up to our website - ArcadeGameWebsite.com!"
            + "\n\nClick here to confirm and complete your sign up: " 
            + "https://arcadegame-gonin-server.herokuapp.com/user/confirm-sign-up/" + pending_id   
            + "\n\nDo not share this email to any one!"
            + "\n\nIf you not doing this, just ignore this message!"
            + "\n\nThank you,"
            + "\n---ArcadeGameWebsite - GoNin Team---"
    }

    transporter.sendMail(options, function(err, info){
        if (err){
            console.log(err);
            return false;
        }
        console.log("Send: " + info.response);
    })
}

function confirmSignUp(req, res){
    const id = req.params.id;

    models.Pending_user.findByPk(id).then(result => {
        if (result) {
            const default_ava = (result.Gender == 1) ? 'male.jpg' : 'female.jpg';
            const newUser = {
                Email: result.Email,
                Password: result.Password,
                Role: 0,
                Full_name: result.Full_name,
                Gender: result.Gender,
                DayOfBirth: "2001-01-01",
                Avatar: default_ava
            }

            models.User.create(newUser).then(result1 => {
                res.status(201).json({
                    message: "Sign up successful! New user created!",
                });
                models.Pending_user.destroy({where:{id:result.id}});
            });
        }
        else{
            res.status(401).json({
                message: "Pending user not exists!"
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function login(req, res) {
    models.User.findOne({where:{Email: req.body.Email}}).then(user => {
        if(user === null){
            res.status(401).json({
                message: "Invalid credentials!",
            });
        }
        else {
            bcryptjs.compare(req.body.Password, user.Password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        email: user.Email,
                        userId: user.id
                    }, 'secret', function(err, token){
                        res.status(200).json({
                            message: "Authentication successful!",
                            token: token
                        });
                    });
                }
                else {
                    res.status(401).json({
                        message: "Invalid credentials!",
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function getCurrentUser(req, res){
    const id = req.userData.userId;

    models.User.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "User not found!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    });
}

function index(req, res){
    models.User.findAll().then(result => {
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

    models.User.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "User not found!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    });
}

function update(req, res){
    const id = req.params.id;
    const updateUser = {
        Full_name: req.body.Full_name,
        Role: req.body.Role,
        Gender: req.body.Gender,
        DayOfBirth: req.body.DayOfBirth
    }

    const validationResponse = v.validate(updateUser, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed!",
            errors: validationResponse
        });
    }

    models.User.update(updateUser, {where: {id:id}}).then(result => {
        res.status(200).json({
            message: "User updated successfully!",
            post: updateUser
        });
    }).catch(error => {
        res.status(400).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function destroy(req, res){
    const id = req.params.id;

    models.User.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
            message: "User deleted successfully!"
        });
    }).catch(error => {
        res.status(400).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function forgot(req, res){
    models.User.findOne({where: {Email:req.body.Email}}).then(result => {
        if(result){
            sendResetPasswordEmail(result.Email);
            res.status(201).json({
                message: "Reset password email sended! Please check your email to confirm reset!"
            }); 
        }
        else{
            res.status(404).json({
                message: "Email not found!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    });
}

function sendResetPasswordEmail(email){
    const options = {
        from: "ArcadeGameWebsite@outlook.com.vn",
        to: email,
        subject: "Reset password for account: " + email,
        text: "Hello " + email + ", you have just reset your password for ArcadeGameWebsite.com!"
            + "\n\nClick here to reset your password: " 
            + "https://arcadegame-gonin-server.herokuapp.com/user/reset-password/" + email 
            + "\n\nDo not share this link or email to any one!"
            + "\n\nIf you not doing this, you can just ignore this message!"
            + "\n\nThank you,"
            + "\n---ArcadeGameWebsite - GoNin Team---"
    }
    
    transporter.sendMail(options, function(err, info){
        if (err){ 
            console.log(err);
            return false;
        }
        console.log("Send: " + info.response);
    })
}

function resetPassword(req, res){
    const email = req.params.email;
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let newPassword = "";
    for ( var i = 0; i < 8; i++ ) {
        newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    bcryptjs.genSalt(10, function(err, salt){
        bcryptjs.hash(newPassword, salt, function(err, hash){
            const updateUser = {
                Password: hash
            }

            models.User.update(updateUser, {where: {Email:email}}).then(result1 => {
                res.status(200).json({
                    message: "Password reset successfully! You can login with new password now!",
                    New_password: newPassword
                });
            }).catch(error => {
                res.status(400).json({
                    message: "Something went wrong!",
                    error: error
                });
            });
        });
    });
}

function changePassword(req, res){
    const id = req.params.id;

    models.User.findOne({where:{id: id}}).then(user => {
        if(user === null){
            res.status(401).json({
                message: "User not found!"
            });
        }
        else {
            bcryptjs.compare(req.body.Old_password, user.Password, function(err, result){
                if(result){
                    bcryptjs.genSalt(10, function(err, salt){
                        bcryptjs.hash(req.body.New_password, salt, function(err, hash){
                            const updateUser = {
                                Password: hash
                            }
        
                            models.User.update(updateUser, {where: {id: user.id}}).then(result1 => {
                                res.status(200).json({
                                    message: "Change password successfully!"
                                });
                            }).catch(error => {
                                res.status(200).json({
                                    message: "Something went wrong!",
                                    error: error
                                });
                            });
                        });
                    });
                }
                else {
                    res.status(401).json({
                        message: "Wrong old password!"
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

module.exports = {
    signUp: signUp,
    confirmSignUp: confirmSignUp,
    login: login,
    getCurrentUser:getCurrentUser,
    index: index,
    show: show,
    update: update,
    destroy: destroy,
    forgot: forgot,
    resetPassword: resetPassword,
    changePassword: changePassword
}