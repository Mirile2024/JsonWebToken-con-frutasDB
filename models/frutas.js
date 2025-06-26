const mongoose = require('mongoose');

const frutasSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    imagen:{
        type: String,
        required: true,
    },
    nombre:{
        type: String,
        required: true,
    },
    precio:{
        type: Number,
        required: true,
        min: 0,
    },
},{versionKey: false});

const Frutas = mongoose.model('Frutas', frutasSchema);

module.exports = { Frutas };    