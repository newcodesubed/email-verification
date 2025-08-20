import express from 'express';
import { login, logout, signup, verifyEmail, forgetPassword, resetPassword } from '../controlles/auth.controller.js';

const router = express.Router();
//verifyToken middleware is defined in your middleware directory
router.get('/check-auth',verifyToken, checkAuth)

router.post('/signup', signup)

router.post('/verify-email', verifyEmail)

router.post('/login', login)

router.post('/logout', logout)

router.post('/forget-password', forgetPassword);

router.post('/reset-password/:token', resetPassword);

export default router;