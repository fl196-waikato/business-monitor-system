export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  timestamp: string;
}

export interface HealthStatus {
  status: string;
  timestamp: string;
  service: string;
  version: string;
  uptime: number;
}

export interface ServiceConfig {
  baseURL: string;
  timeout?: number;
  retries?: number;
}

export interface User {
  id: string;
  email: string;
  role: string;
  name?: string;
  createdAt: string;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  userId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  message: string;
  sender: 'user' | 'bot';
  timestamp: string;
}