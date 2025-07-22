import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import { errorHandler } from './middleware/errorHandler';
import routes from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Logging
app.use(morgan('combined'));

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'API Gateway',
    version: '1.0.0',
    uptime: process.uptime()
  });
});

// Basic test route
app.get('/api/test', (req: Request, res: Response) => {
  res.json({
    message: 'API Gateway is working!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Routes for external frontend
app.post('/api/tickets', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Ticket endpoint ready',
    data: req.body
  });
});

app.post('/api/chat', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Chat endpoint ready',
    reply: 'This is a test response from API Gateway'
  });
});

// Error handler - 必须放在所有路由后面
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('API Gateway Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'Something went wrong!',
    timestamp: new Date().toISOString()
  });
});

// 404 handler - 必须是最后一个中间件
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.originalUrl}`,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API Gateway running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔒 CORS enabled for: ${corsOptions.origin}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/health`);
  console.log(`🧪 Test endpoint: http://localhost:${PORT}/api/test`);
});

export default app;