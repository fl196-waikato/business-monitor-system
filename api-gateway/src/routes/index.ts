import { Router } from 'express';
import ticketRoutes from './tickets';
import chatRoutes from './chat';
import userRoutes from './users';

const router = Router();

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'API Gateway',
    version: '1.0.0'
  });
});

// Mount routes
router.use('/tickets', ticketRoutes);
router.use('/chat', chatRoutes);
router.use('/users', userRoutes);

export default router;