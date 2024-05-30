import React from 'react';

const ChatWindow = ({ messages }) => (
  <div className="chat-window">
    {messages.map((message) => (
      <div key={message.text} className={`message ${message.sender}`}>
        {message.text}
      </div>
    ))}
  </div>
);

export default ChatWindow;
