import React, { useState } from 'react';

const DemoChatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    const sendMessage = () => {
        if (inputText.trim() !== '') {
            setMessages([...messages, { text: inputText, sender: 'user' }]);
            setInputText('');
            // Here you can send the inputText to your backend for processing by the chatbot
            // and receive a response to display.
            // For demo purposes, we'll just add a simple response from the chatbot.
            setTimeout(() => {
                setMessages([...messages, { text: 'This is a response from the chatbot.', sender: 'bot' }]);
            }, 500);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default DemoChatbot;
