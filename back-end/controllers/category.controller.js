const models = require('../models');
const Validator = require('fastest-validator');

const schema = {
    CategoryName: {type: "string", optional:true}
}

const v = new Validator();

function save(req, res){
    const category = {
        CategoryName: req.body.CategoryName
    }

    const validationResponse = v.validate(category, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed!",
            errors: validationResponse
        });
    }

    models.Category.findOne({where: {CategoryName:req.body.CategoryName}}).then(result => {
        if (result) {
            res.status(401).json({
                message: "Category already exist!"
            });
        }
        else {
            models.Category.create(category).then(result1 => {
                res.status(201).json({
                    message: "Category added successfully!",
                    post: result1
                });
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
    models.Category.findAll().then(result => {
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

    models.Category.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Category not found!"
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
    const category = {
        CategoryName: req.body.CategoryName
    }

    const validationResponse = v.validate(category, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed!",
            errors: validationResponse
        });
    }

    models.Category.findOne({where: {CategoryName:req.body.CategoryName}}).then(result => {
        if (result) {
            res.status(401).json({
                message: "Category already exist!"
            });
        }
        else {
            models.Category.update(category, {where: {id:id}}).then(result1 => {
                res.status(200).json({
                    message: "Category updated successfully!",
                    post: category
                });
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function destroy(req, res){
    const id = req.params.id;

    models.Category.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
            message: "Category deleted successfully!"
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
    show: show,
    update: update,
    destroy: destroy
}