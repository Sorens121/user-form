const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name : String,
    position : String,
    office : String,
    salary: Number
});

let Employee = mongoose.model('Employee', schema);

module.exports = {Employee};