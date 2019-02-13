'use strict';
const model = require('../models/Local');
const repository = require('../repository/LocalRepository');

var LocalBusiness = {
    InsertLocal(data) {
        if (data != null)
            repository.create();
    },

    GetLocals() {
        repository.get();
    },

    GetLocal(id) {
        if (parseInt(id) > 0)
            repository.getById(id);
    },

    DeleteLocal(id) {
        if (parseInt(id) > 0)
            repository.delete(id);
    },

    UpdateLocal(data) {
        if (data != null)
            repository.update(data);
    }
}

module.exports = LocalBusiness;