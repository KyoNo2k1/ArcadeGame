const models = require('../models')
const Validator = require('fastest-validator')

const schema = {
    DevID: {type:"number", optional: true},
    Url: {type:"string", optional: true},
    DemoUrl: {type:"string", optional: true},
    Title: {type:"string", optional: true},
    Avatar: {type:"string", optional: true},
    Category: {type:"string", optional: true},
    GamePlayImage: {type:"string", optional: true},
    Description: {type:"string", optional: true},
    Played: {type:"number", optional: true},
    Rate: {type:"number", optional: true}
}

const v = new Validator();

function save(req, res){
    const game = {
        DevID: req.body.DevID, 
        Url: req.body.Url,
        DemoUrl: req.body.DemoUrl,
        Title: req.body.Title,
        Avatar: req.body.Avatar,
        Category: req.body.Category,
        GamePlayImage: req.body.GamePlayImage,
        Description: req.body.Description,
        Played: req.body.Played,
        Rate: req.body.Rate
    }

    const validationResponse = v.validate(game, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed!",
            errors: validationResponse
        });
    }

    models.Game.create(game).then(result => {
        res.status(201).json({
            message: "Game created successfully!",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function show(req, res){
    const id = req.params.id;

    models.Game.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Game not found!"
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
    models.Game.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function update(req, res){
    const id = req.params.id;
    const updateGame = {
        DevID: req.body.DevID,
        Url: req.body.Url,
        DemoUrl: req.body.DemoUrl,
        Title: req.body.Title,
        Avatar: req.body.Avatar,
        Category: req.body.Category,
        GamePlayImage: req.body.GamePlayImage,
        Description: req.body.Description,
        Played: req.body.Played,
        Rate: req.body.Rate
    }

    const validationResponse = v.validate(updateGame, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed!",
            errors: validationResponse
        });
    }

    models.Game.update(updateGame, {where: {id:id}}).then(result => {
        res.status(200).json({
            message: "Game updated successfully!",
            post: updateGame
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function increasePlayed(req, res){
    const id = req.params.id;
    models.Game.findByPk(id).then(result => {
        console.log(result)
        if (result){
            const updatePlayed = {
                Played: result.Played + 1
            }
            models.Game.update(updatePlayed, {where: {id:id}}).then(result1 => {
                res.status(200).json({
                    message: "Increase played successfully!"
                });
            })
        }
        else {
            res.status(200).json({
                message: "Game not found!"
            });
        }
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function destroy(req, res){
    const id = req.params.id;

    models.Game.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
            message: "Game deleted successfully!"
        });
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
    update: update,
    increasePlayed: increasePlayed,
    destroy: destroy
}