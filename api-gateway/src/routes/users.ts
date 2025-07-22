import { Router } from 'express';
import { proxyRequest } from '../utils/serviceProxy';
import { authMiddleware } from '../middleware/auth';

const router = Router();

// User registration
router.post('/register', async (req, res) => {
  await proxyRequest('user', '/users/register', req, res);
});

// User login
router.post('/login', async (req, res) => {
  await proxyRequest('user', '/users/login', req, res);
});

// Get user profile
router.get('/profile', authMiddleware, async (req, res) => {
  await proxyRequest('user', '/users/profile', req, res);
});

export default router;