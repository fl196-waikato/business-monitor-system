import React, { useState } from 'react';
import { api } from '../utils/api';

// Define form data type
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    priority: 'medium'
  });
  
  const [loading, setLoading] = useState(false);
  const [showSubmitSuccess, setShowSubmitSuccess] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{id: string, message: string, sender: 'user' | 'bot'}>>([]);
  const [chatEnded, setChatEnded] = useState(false);
  const [showSatisfactionSurvey, setShowSatisfactionSurvey] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Submit ticket
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const response = await api.tickets.create({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        priority: formData.priority
      });
      
      console.log('Ticket created:', response);
      setShowSubmitSuccess(true);
      
      // Hide success message and clear form after 3 seconds
      setTimeout(() => {
        setShowSubmitSuccess(false);
        handleCancel();
      }, 3000);
      
    } catch (error) {
      console.error('Failed to create ticket:', error);
      alert('Submission failed, please try again later');
    } finally {
      setLoading(false);
    }
  };

  // Connect to customer service AI
  const handleCustomerService = () => {
    setShowChatModal(true);
    setChatEnded(false);
    setShowSatisfactionSurvey(false);
    // Initialize conversation
    if (chatHistory.length === 0) {
      setChatHistory([{
        id: '1',
        message: 'Hello! I am your AI customer service assistant. How can I help you today?',
        sender: 'bot'
      }]);
    }
  };

  // Send chat message
  const handleSendMessage = async () => {
    if (!chatMessage.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      message: chatMessage,
      sender: 'user' as const
    };

    setChatHistory(prev => [...prev, userMessage]);
    setChatMessage('');

    try {
      const response = await api.chat.send(chatMessage);
      const botMessage = {
        id: (Date.now() + 1).toString(),
        message: response.reply || 'Sorry, I cannot answer that question right now. Please try again later.',
        sender: 'bot' as const
      };
      setChatHistory(prev => [...prev, botMessage]);
      
      // After bot response, ask if user has more questions
      setTimeout(() => {
        const followUpMessage = {
          id: (Date.now() + 2).toString(),
          message: 'Do you have any other questions I can help you with?',
          sender: 'bot' as const
        };
        setChatHistory(prev => [...prev, followUpMessage]);
      }, 1000);
      
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        message: 'Sorry, there was a connection problem. Please try again later.',
        sender: 'bot' as const
      };
      setChatHistory(prev => [...prev, errorMessage]);
    }
  };

  // Handle end chat
  const handleEndChat = () => {
    setChatEnded(true);
    const endMessage = {
      id: Date.now().toString(),
      message: 'Was your issue resolved? Please rate your satisfaction with our service.',
      sender: 'bot' as const
    };
    setChatHistory(prev => [...prev, endMessage]);
    setShowSatisfactionSurvey(true);
  };

  // Handle satisfaction rating
  const handleSatisfactionRating = (rating: 'satisfied' | 'unsatisfied' | 'unresolved') => {
    let responseMessage = '';
    
    if (rating === 'satisfied') {
      responseMessage = 'Thank you for your feedback! We\'re glad we could help you.';
    } else {
      responseMessage = 'Thank you for your feedback. Your issue will be transferred to our human customer service team. Please check your email or phone for further communication.';
    }
    
    const ratingMessage = {
      id: Date.now().toString(),
      message: responseMessage,
      sender: 'bot' as const
    };
    setChatHistory(prev => [...prev, ratingMessage]);
    setShowSatisfactionSurvey(false);
  };

  // Clear form
  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      priority: 'medium'
    });
    setShowSubmitSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Success message */}
            {showSubmitSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Submission Successful!</span>
                </div>
                <p className="mt-1">Thank you for your inquiry. Our staff will reply to you within 1-2 business days.</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please enter your phone number"
                />
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                <select
                  value={formData.priority}
                  onChange={(e) => handleInputChange('priority', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>

            {/* Subject */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Please enter the subject"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Please describe your question or requirement in detail..."
              />
            </div>

            {/* Three action buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>

              <button
                onClick={handleCustomerService}
                className="flex-1 py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
              >
                Customer Service
              </button>

              <button
                onClick={handleCancel}
                className="flex-1 py-3 px-6 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* Right side - Service Information */}
          <div className="space-y-6">
            {/* Working Hours */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Working Hours
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Human Support:</span>
                  <span className="font-medium">Monday - Friday</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">9:30 AM - 5:30 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">AI Customer Service:</span>
                  <span className="font-medium text-green-600">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Service Process */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Service Process
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Initial Contact</h3>
                    <p className="text-sm text-gray-600">Choose to submit a ticket or chat with AI customer service</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">AI Assistance</h3>
                    <p className="text-sm text-gray-600">Our AI will help resolve your issue and ask for feedback</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Satisfaction Survey</h3>
                    <p className="text-sm text-gray-600">Rate your experience and let us know if the issue was resolved</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Human Escalation</h3>
                    <p className="text-sm text-gray-600">If unsatisfied or unresolved, your case will be transferred to human support. Please monitor your email and phone for updates.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">support@company.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat modal */}
        {showChatModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg w-full max-w-md h-96 flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold">Customer Service</h3>
                <button
                  onClick={() => setShowChatModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {chatHistory.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs px-3 py-2 rounded-lg ${
                      msg.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {msg.message}
                    </div>
                  </div>
                ))}

                {/* Satisfaction Survey */}
                {showSatisfactionSurvey && (
                  <div className="flex justify-center">
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <p className="text-sm text-gray-700 text-center">Please rate your experience:</p>
                      <div className="flex flex-col space-y-2">
                        <button
                          onClick={() => handleSatisfactionRating('satisfied')}
                          className="px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                        >
                          Satisfied & Resolved
                        </button>
                        <button
                          onClick={() => handleSatisfactionRating('unsatisfied')}
                          className="px-4 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600"
                        >
                          Unsatisfied
                        </button>
                        <button
                          onClick={() => handleSatisfactionRating('unresolved')}
                          className="px-4 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                        >
                          Unresolved
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {!chatEnded && (
                <div className="p-4 border-t">
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Type your message..."
                    />
                    <button
                      onClick={handleSendMessage}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Send
                    </button>
                  </div>
                  <button
                    onClick={handleEndChat}
                    className="w-full py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 text-sm"
                  >
                    End Chat
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;