
import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleMessageSubmit = () => {
    if (userInput.trim() !== '') {
      setMessages([...messages, { text: userInput, isUser: true }]);
      // Call function to send message to backend and get response
      sendMessageToBackend(userInput);
      setUserInput('');
    }
  };

  const sendMessageToBackend = (message) => {
    // Send message to backend and handle response
    // Example:
    // fetch('/path/to/your/backend', {
    //   method: 'POST',
    //   body: JSON.stringify({ message: message })
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setMessages([...messages, { text: data.response, isUser: false }]);
    // })
    // .catch(error => console.error('Error:', error));
    // Replace '/path/to/your/backend' with your actual backend endpoint
  };

  return (
    <div id="chatbox">
      <div id="chat-messages">
      {messages.map((message, index) => (
        <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
          {message.text}
       </div>
      ))}
      </div>
      <input
        type="text"
        id="user-input"
        placeholder="Type your message..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button id="send-btn" onClick={handleMessageSubmit}>Send</button>
    </div>
  );
}

export default Chatbot;
