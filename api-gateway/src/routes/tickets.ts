import { Router } from 'express';
import { proxyRequest } from '../utils/serviceProxy';
import { authMiddleware } from '../middleware/auth';

const router = Router();

// Create ticket (public)
router.post('/', async (req, res) => {
  await proxyRequest('ticket', '/tickets', req, res);
});

// Get tickets (requires auth)
router.get('/', authMiddleware, async (req, res) => {
  await proxyRequest('ticket', '/tickets', req, res);
});

// Get ticket by ID
router.get('/:id', authMiddleware, async (req, res) => {
  await proxyRequest('ticket', `/tickets/${req.params.id}`, req, res);
});

// Update ticket
router.put('/:id', authMiddleware, async (req, res) => {
  await proxyRequest('ticket', `/tickets/${req.params.id}`, req, res);
});

export default router;