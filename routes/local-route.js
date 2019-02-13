'use strict';
var express = require('express');
var router = express.Router();
var controller = require('../controllers/LocalController');

router.get('/', controller.get);
router.get('/:id', controller.get);
router.post('/:local', controller.post);
router.delete('/:id', controller.delete);
router.put('/:local', controller.update);

module.exports = router;
