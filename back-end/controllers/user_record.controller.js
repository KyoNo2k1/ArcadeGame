const models = require('../models');
const Validator = require('fastest-validator');

const schema = {
    UserID: {type: "number", optional:true},
    GameID: {type: "number", optional:true},
    HighScore: {type: "number", optional:true}
}

const v = new Validator();

function save(req, res){
    const record = {
        UserID: req.body.UserID,
        GameID: req.body.GameID,
        HighScore: req.body.HighScore
    }

    const validationResponse = v.validate(record, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed!",
            errors: validationResponse
        });
    }

    models.User_record.create(record).then(result => {
        res.status(201).json({
            message: "Record created successfully!",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function index(req, res){
    models.User_record.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function indexByGameID(req, res){
    const id = req.params.id;

    models.User_record.findAll({where: {GameID:id}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function indexByUserID(req, res){
    const id = req.params.id;

    models.User_record.findAll({where: {UserID:id}}).then(result => {
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

    models.User_record.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Record not found!"
            });
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
    const record = {
        UserID: req.body.UserID,
        GameID: req.body.GameID,
        HighScore: req.body.HighScore
    }

    const validationResponse = v.validate(record, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed!",
            errors: validationResponse
        });
    }

    models.User_record.update(record, {where: {id:id}}).then(result => {
        res.status(200).json({
            message: "Record updated successfully!",
            post: record
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    })
}

function destroy(req, res){
    const id = req.params.id;

    models.User_record.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
            message: "Record deleted successfully!"
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

module.exports = {
    save:save,   
    index: index,
    indexByGameID: indexByGameID,
    indexByUserID: indexByUserID,
    show: show,
    update: update,
    destroy: destroy
}