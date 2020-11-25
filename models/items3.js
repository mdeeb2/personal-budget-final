const mongoose = require('mongoose');

const itemsSchema3 = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        minlength: 7,
        maxlength: 7 
    }
}, { collection: 'items3' });


const items3 = mongoose.model("items3", itemsSchema3);
module.exports = items3