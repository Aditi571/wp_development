

import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleMessageSubmit = () => {
    if (userInput.trim() !== '') {
      setMessages([...messages, { text: userInput, isUser: true }]);
      // sendMessageToBackend(userInput); // Commented out the backend part
      setUserInput('');
    }
  };

  // Placeholder function for sending message to backend AI and receiving response
  // const sendMessageToBackend = (message) => {
  //   const response = `Response from AI for "${message}"`;
  //   setMessages([...messages, { text: response, isUser: false }]);
  // };

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.chatbotHeader}>
        <h2>Chat with our Bot</h2>
      </div>
      <div style={styles.chatbotMessages}>
        {messages.map((message, index) => (
          <div key={index} style={message.isUser ? styles.userMessage : styles.botMessage}>
            {message.isUser ? (
              <>
                <div style={styles.userLogo}>&#128100;</div> {/* Default logo for customer messages */}
                {message.text}
              </>
            ) : (
              <div>{message.text}</div>
            )}
          </div>
        ))}
      </div>
      <div style={styles.chatbotInput}>
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={styles.inputField}
        />
        <button onClick={handleMessageSubmit} style={styles.sendButton}>Send</button>
      </div>
    </div>
  );
}

// Inline styles
const styles = {
  chatbotContainer: {
    maxWidth: '400px',
    margin: 'auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
  },
  chatbotHeader: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  chatbotMessages: {
    maxHeight: '300px',
    overflowY: 'auto',
    padding: '10px',
  },
  userMessage: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px',
    borderRadius: '8px',
    margin: '5px 10px',
    textAlign: 'right',
  },
  botMessage: {
    backgroundColor: '#f0f0f0',
    color: '#000',
    padding: '8px',
    borderRadius: '8px',
    margin: '5px 10px',
    textAlign: 'left',
  },
  userLogo: {
    marginRight: '8px',
    fontSize: '24px',
  },
  chatbotInput: {
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #ccc',
    padding: '10px',
  },
  inputField: {
    flex: '1',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginRight: '10px',
    outline: 'none',
  },
  sendButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 15px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    outline: 'none',
  },
};

export default Chatbot;
