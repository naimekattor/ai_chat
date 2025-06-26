const ChatBubble = ({ sender, content }) => {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xl p-3 rounded-lg shadow ${isUser ? 'bg-gray-700' : 'bg-gray-600'}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
