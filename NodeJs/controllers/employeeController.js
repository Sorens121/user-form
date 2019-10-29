const express = require('express');
let router = express.Router();
let { Employee } = require('../models/employee');
let ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    Employee.find((err, data) => {
        if(!err){
            res.send(data);
        } else {
            console.log('Error in retriving Employees :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with given id: $(req.params.id)`);
    }

    Employee.findById(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error in retriving Employees :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error in retriving Employees :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No records with given id: ${req.params.id}`);
    }

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if(!err){
            return res.send(doc);
        } else {
            console.log('Error in retriving Employees :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No records with given id: ${req.params.id}`);
    }

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error in retriving Employees :' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;