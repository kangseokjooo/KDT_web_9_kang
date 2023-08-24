const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
//회원가입 기능
router.get('/signup',controller.signup);
router.post('/signup',controller.post_signup);
//로그인
router.get('/signin',controller.signin);
router.post('/signin',controller.post_signin);

//회원정보 수정
router.get('/profile/:number',controller.profile);
router.patch('/profile/edit',controller.edit_profile)

//예시)회원 구매 목록 

module.exports = router;
