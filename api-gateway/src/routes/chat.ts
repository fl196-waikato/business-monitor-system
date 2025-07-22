import { Router } from 'express';
import { proxyRequest } from '../utils/serviceProxy';

const router = Router();

// Send message to chat
router.post('/', async (req, res) => {
  await proxyRequest('chat', '/chat', req, res);
});

// Get chat history
router.get('/history/:sessionId', async (req, res) => {
  await proxyRequest('chat', `/chat/history/${req.params.sessionId}`, req, res);
});

export default router;