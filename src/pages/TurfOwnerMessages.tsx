
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, Search, Send, Star, Calendar } from 'lucide-react';

const TurfOwnerMessages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      customer: 'John Doe',
      lastMessage: 'Is the turf available for tomorrow evening?',
      time: '2 hours ago',
      unread: true,
      avatar: null,
      turf: 'Champions Arena'
    },
    {
      id: 2,
      customer: 'Jane Smith',
      lastMessage: 'Thank you for the great experience!',
      time: '1 day ago',
      unread: false,
      avatar: null,
      turf: 'Victory Ground'
    },
    {
      id: 3,
      customer: 'Mike Wilson',
      lastMessage: 'Can we reschedule our booking?',
      time: '2 days ago',
      unread: true,
      avatar: null,
      turf: 'Elite Sports Hub'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'customer',
      content: 'Hi! Is the Champions Arena available tomorrow from 6-7 PM?',
      time: '2:30 PM'
    },
    {
      id: 2,
      sender: 'owner',
      content: 'Hello John! Yes, Champions Arena is available tomorrow from 6-7 PM. The rate is ৳1500 for one hour. Would you like to book it?',
      time: '2:32 PM'
    },
    {
      id: 3,
      sender: 'customer',
      content: 'Perfect! Yes, I would like to book it. How many players can we accommodate?',
      time: '2:33 PM'
    },
    {
      id: 4,
      sender: 'owner',
      content: 'Great! The turf can accommodate up to 14 players (7 vs 7). I\'ll send you the booking confirmation shortly. Payment can be made via bKash or at the venue.',
      time: '2:35 PM'
    }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const quickReplies = [
    'Turf is available at that time',
    'Rate is ৳1500 per hour',
    'You can accommodate up to 14 players',
    'Payment accepted via bKash or cash',
    'Booking confirmed! See you there!',
    'Sorry, that slot is already booked'
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Conversations List */}
        <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Customer Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search conversations..." className="pl-9" />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="p-4 border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-2">
                <p className="text-lg font-bold text-blue-600">{conversations.length}</p>
                <p className="text-xs text-gray-600">Conversations</p>
              </div>
              <div className="p-2">
                <p className="text-lg font-bold text-red-600">{conversations.filter(c => c.unread).length}</p>
                <p className="text-xs text-gray-600">Unread</p>
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
                    <AvatarImage src={conversation.avatar} alt={conversation.customer} />
                    <AvatarFallback className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                      {conversation.customer.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900 truncate">{conversation.customer}</h4>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Re: {conversation.turf}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                      {conversation.unread && (
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      )}
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
                      <p className="text-sm text-gray-600">Asking about Champions Arena</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      Book for Customer
                    </Button>
                    <Button variant="outline" size="sm">
                      <Star className="w-4 h-4 mr-1" />
                      Mark Important
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
                      className={`flex ${message.sender === 'owner' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === 'owner'
                            ? 'bg-green-600 text-white'
                            : 'bg-white text-gray-900 border border-gray-200'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === 'owner' ? 'text-green-100' : 'text-gray-500'
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Replies */}
              <div className="p-4 bg-white border-t border-gray-200">
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Quick Replies:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.slice(0, 3).map((reply, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => setNewMessage(reply)}
                        className="text-xs"
                      >
                        {reply}
                      </Button>
                    ))}
                  </div>
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
                <p className="text-gray-600">Choose a customer conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TurfOwnerMessages;
