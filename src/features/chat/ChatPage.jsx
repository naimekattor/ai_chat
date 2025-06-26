import React, { useState, useEffect } from 'react';
import { useGetChatsQuery, useSendMessageMutation, useCreateChatMutation } from './chatAPI';
import { useSelector } from 'react-redux';
import ChatBubble from '@/components/ChatBubble';

const ChatPage = () => {
  const [chatId, setChatId] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  console.log('user', user?.email);

  console.log('token', token);

  const { data: chatList } = useGetChatsQuery(token, { skip: !token });
  const [sendMessage] = useSendMessageMutation();
  const [createChat] = useCreateChatMutation();

  // Load initial chat
  useEffect(() => {
    if (chatList && chatList.length > 0) {
      const latestChat = chatList[0];
      setChatId(latestChat.id);
      setMessages(latestChat.messages || []);
    }
  }, [chatList]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const newMessage = {
      sender: 'user',
      content: message,
    };

    setMessages((prev) => [...prev, newMessage]);

    try {
      const response = await sendMessage({
        token,
        message,
        chat_id: chatId,
      }).unwrap();


      if (response.reply) {
        setMessages((prev) => [...prev, { sender: 'agent', content: response.reply }]);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    }

    setMessage('');
  };

  const handleCreateChat = async (agentName) => {
    try {
      const res = await createChat({ agent: agentName }).unwrap();
      setChatId(res.chat_id);
      setMessages([]);
    } catch (err) {
      console.error('Error creating chat:', err);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-800 p-4">
        <h2 className="text-lg font-bold mb-4">{user?.email}</h2>
        <p className="text-sm text-gray-400">Welcome back</p>
        {/* Add nav icons if needed */}
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Chat Agent Buttons */}
        <div className="p-4 border-b border-gray-700 flex gap-2">
          {['Chartwright', 'TranscriptX', 'Redactify', 'Validify'].map((agent) => (
            <button
              key={agent}
              onClick={() => handleCreateChat(agent)}
              className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200"
            >
              {agent}
            </button>
          ))}
        </div>

        {/* Chat History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, idx) => (
            <ChatBubble key={idx} sender={msg.sender} content={msg.content} />
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-700 flex items-center gap-2">
          <input
            className="flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white"
            placeholder="Type your message (Shift + Enter for newline)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}

            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey && chatId) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"

          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;
