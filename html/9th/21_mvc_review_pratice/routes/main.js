const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
router.get('/user',controller.user)
router.get('/useradd',controller.useradd)
router.post('/useradd',controller.useraddFunc)
module.exports = router;
