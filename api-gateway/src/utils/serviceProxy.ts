import axios, { AxiosRequestConfig } from 'axios';
import { Request, Response } from 'express';
import { createError } from '../middleware/errorHandler';

interface ServiceConfig {
  baseURL: string;
  timeout?: number;
}

const services: Record<string, ServiceConfig> = {
  user: {
    baseURL: process.env.USER_SERVICE_URL || 'http://localhost:3001',
    timeout: 5000
  },
  ticket: {
    baseURL: process.env.TICKET_SERVICE_URL || 'http://localhost:3002',
    timeout: 5000
  },
  chat: {
    baseURL: process.env.CHAT_SERVICE_URL || 'http://localhost:3003',
    timeout: 5000
  },
  notification: {
    baseURL: process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:3004',
    timeout: 5000
  }
};

export const proxyRequest = async (
  serviceName: string,
  path: string,
  req: Request,
  res: Response
) => {
  try {
    const service = services[serviceName];
    if (!service) {
      throw createError(`Service ${serviceName} not found`, 404, 'SERVICE_NOT_FOUND');
    }

    const config: AxiosRequestConfig = {
      method: req.method as any,
      url: `${service.baseURL}${path}`,
      timeout: service.timeout,
      headers: {
        ...req.headers,
        'x-forwarded-for': req.ip,
        'x-original-url': req.originalUrl
      }
    };

    // Add request body for POST, PUT, PATCH requests
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      config.data = req.body;
    }

    // Add query parameters
    if (Object.keys(req.query).length > 0) {
      config.params = req.query;
    }

    const response = await axios(config);
    
    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error(`Service ${serviceName} error:`, error.message);
    
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else if (error.code === 'ECONNREFUSED') {
      res.status(503).json({
        error: 'Service unavailable',
        message: `${serviceName} service is currently unavailable`,
        code: 'SERVICE_UNAVAILABLE'
      });
    } else {
      res.status(500).json({
        error: 'Gateway error',
        message: 'An error occurred while processing your request',
        code: 'GATEWAY_ERROR'
      });
    }
  }
};