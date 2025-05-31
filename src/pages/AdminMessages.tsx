
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, Search, Send, MoreHorizontal, Users, Bell, Archive } from 'lucide-react';

const AdminMessages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      user: 'John Doe',
      userType: 'player',
      lastMessage: 'I need help with my booking cancellation',
      time: '2 hours ago',
      unread: true,
      avatar: null
    },
    {
      id: 2,
      user: 'Sarah Khan',
      userType: 'turf_owner',
      lastMessage: 'When will my turf be approved?',
      time: '4 hours ago',
      unread: true,
      avatar: null
    },
    {
      id: 3,
      user: 'Mike Wilson',
      userType: 'player',
      lastMessage: 'Thank you for resolving the payment issue',
      time: '1 day ago',
      unread: false,
      avatar: null
    },
    {
      id: 4,
      user: 'Ahmed Ali',
      userType: 'turf_owner',
      lastMessage: 'How can I update my turf information?',
      time: '2 days ago',
      unread: false,
      avatar: null
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'user',
      content: 'Hello, I need help with my booking cancellation. I booked Champions Arena for tomorrow but need to cancel due to weather.',
      time: '2:30 PM'
    },
    {
      id: 2,
      sender: 'admin',
      content: 'Hello John! I understand your concern about the weather. Let me check your booking details and process the cancellation for you.',
      time: '2:32 PM'
    },
    {
      id: 3,
      sender: 'user',
      content: 'Thank you so much! The booking ID is BK001234. Will I get a full refund?',
      time: '2:33 PM'
    },
    {
      id: 4,
      sender: 'admin',
      content: 'Yes, since the cancellation is due to weather conditions and is more than 24 hours before the booking time, you will receive a full refund within 3-5 business days.',
      time: '2:35 PM'
    }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Conversations List */}
        <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search conversations..." className="pl-9" />
            </div>
          </div>

          {/* Message Stats */}
          <div className="p-4 border-b border-gray-200">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2">
                <p className="text-lg font-bold text-blue-600">{conversations.length}</p>
                <p className="text-xs text-gray-600">Total</p>
              </div>
              <div className="p-2">
                <p className="text-lg font-bold text-red-600">{conversations.filter(c => c.unread).length}</p>
                <p className="text-xs text-gray-600">Unread</p>
              </div>
              <div className="p-2">
                <p className="text-lg font-bold text-green-600">{conversations.filter(c => !c.unread).length}</p>
                <p className="text-xs text-gray-600">Read</p>
              </div>
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedChat === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                }`}
                onClick={() => setSelectedChat(conversation.id)}
              >
                <div className="flex items-start space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={conversation.avatar} alt={conversation.user} />
                    <AvatarFallback className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                      {conversation.user.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900 truncate">{conversation.user}</h4>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                      <div className="flex items-center space-x-1">
                        <Badge
                          className={`text-xs ${
                            conversation.userType === 'player' ? 'bg-green-100 text-green-800' :
                            conversation.userType === 'turf_owner' ? 'bg-blue-100 text-blue-800' :
                            'bg-purple-100 text-purple-800'
                          }`}
                        >
                          {conversation.userType.replace('_', ' ')}
                        </Badge>
                        {conversation.unread && (
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                        J
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-gray-900">John Doe</h3>
                      <p className="text-sm text-gray-600">Player • Online</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Archive className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === 'admin'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-900 border border-gray-200'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === 'admin' ? 'text-blue-100' : 'text-gray-500'
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex space-x-3">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={sendMessage}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            /* No Chat Selected */
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <MessageCircle className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a conversation</h3>
                <p className="text-gray-600">Choose a conversation from the sidebar to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;
