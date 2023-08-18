const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.index);
router.get('/signup',controller.signup)

router.get('/signin',controller.getSignin)


router.post('/signup',controller.post_signup)

router.post('/signin',controller.getUsers)

router.post('/profile',controller.post_profile);

router.patch('/profile/edit',controller.edit_profile)

router.delete('/profile/delete',controller.delete_profile)

router.get('/findall',controller.findall)

module.exports = router;
