'use strict';
const mongo = require('mongoose');

var Local = mongo.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: Number, required: true },
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    Cep: { type: Number, required: false }
});

module.exports = mongo.model('Local', Local);