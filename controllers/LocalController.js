'use strict';
const model = require('../models/Local');
const express = require('express');
const business = require('../business/LocalBusiness');

express.get = async(req, res, next) => {
    business.GetLocal(req.body.id);
}

express.post = async(req, res, next) => {
    business.InsertLocal(req.body);
}

express.delete = async(req, res, next) => {
    business.DeleteLocal(req.body.id);
}

express.update = async(req, res, next) => {
    business.UpdateLocal(req.body);
}


module.exports = express;