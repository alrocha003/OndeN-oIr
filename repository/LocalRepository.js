'use strict';
const mongoose = require('mongoose');
const Local = mongoose.model('Local');

exports.create = async (data) => {
    var local = Local(data);
    await local.save();
}

exports.getById = async (id) => {
    var res = await Local.findById(id);
    return res;
}

exports.get = async () => {
    return await Local.find();
}

exports.update = async (data) => {
    await Local.update(data);
}

exports.delete = async (id) => {
    await Local.remove(id);
}