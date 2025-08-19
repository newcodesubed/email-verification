import express from 'express';
import { login, logout, signup, verifyEmail, forgetPassword } from '../controlles/auth.controller.js';

const router = express.Router();

router.post('/signup', signup)

router.post('/verify-email', verifyEmail)

router.post('/login', login)

router.post('/logout', logout)

router.post('/forget-password', forgetPassword);

export default router;