const mongoose = require('mongoose');

const itemsSchema2 = new mongoose.Schema({
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
}, { collection: 'items2' });


const items2 = mongoose.model("items2", itemsSchema2);
module.exports = items2