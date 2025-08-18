import express from 'express';
import { login, logout, signup,verifyEmail } from '../controlles/auth.controller.js';

const router = express.Router();

router.post('/signup', signup)

router.post('/verify-email', verifyEmail)

router.post('/login', login)

router.post('/logout', logout)

export default router;