const API_BASE_URL = 'http://localhost:8000/api';

// 通用 API 调用函数
const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// API 接口定义
export const api = {
  // 工单相关 API
  tickets: {
    create: async (data: {
      name: string;
      email: string;
      subject: string;
      message: string;
      priority?: string;
    }) => {
      return apiCall('/tickets', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    },

    getAll: async () => {
      return apiCall('/tickets');
    },

    getById: async (id: string) => {
      return apiCall(`/tickets/${id}`);
    }
  },

  // 聊天相关 API  
  chat: {
    send: async (message: string, sessionId?: string) => {
      return apiCall('/chat', {
        method: 'POST',
        body: JSON.stringify({ 
          message,
          sessionId: sessionId || 'default'
        }),
      });
    },

    getHistory: async (sessionId: string) => {
      return apiCall(`/chat/history/${sessionId}`);
    }
  },

  // 用户相关 API
  users: {
    register: async (userData: {
      name: string;
      email: string;
      password: string;
    }) => {
      return apiCall('/users/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      });
    },

    login: async (credentials: {
      email: string;
      password: string;
    }) => {
      return apiCall('/users/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });
    }
  },

  // 系统状态检查
  health: {
    check: async () => {
      return apiCall('/health');
    }
  }
};

export default api;