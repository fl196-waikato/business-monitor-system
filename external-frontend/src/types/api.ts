export interface TicketData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
}

export interface TicketResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    status: string;
    createdAt: string;
  };
}

export interface ChatMessage {
  id: string;
  message: string;
  sender: 'user' | 'bot';
  timestamp: string;
  sessionId: string;
}

export interface ChatResponse {
  success: boolean;
  message: string;
  reply?: string;
  sessionId?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  timestamp: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
  createdAt: string;
}