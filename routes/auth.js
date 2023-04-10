const router = require('express').Router();
const express = require('express');

router.use(express.json())

// Controller
const authCntrl = require("../controllers/auth");

router.post('/auth/signup', authCntrl.auth_signup_post)
router.post('/auth/signin', authCntrl.auth_signin_post)
module.exports = router;