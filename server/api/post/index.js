'use strict';

var express = require('express');
var controller = require('./post.controller');
var auth = require('../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated() ,controller.getAll);
router.post('/create', auth.isAuthenticated(), controller.create);
//router.get('/getposts/:postid', controller.findPostById);
router.post('/edit:post', controller.edit);

module.exports = router;
