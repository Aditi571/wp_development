import React from 'react'
import { useState } from 'react';
import { Sender } from '../components/Sender';
import { Receiver } from '../components/Receiver';
 function Home (){
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
  
    const handleMessageSubmit = () => {
      if (inputText.trim() === '') return;
      setMessages([...messages, { text: inputText, sender: 'user' },{ text: 'Bot: Hello, I am a simple chatbot!', sender: 'bot' }]);
      setInputText('');
    };
  
    const handleInputChange = (e) => {
      setInputText(e.target.value);
    };
  
    return (
      <div className="flex justify-end items-center h-screen flex-row">
        <div className='w-[20vw] h-[100vh] border border-gray-300 rounded-md overflow-hidden flex justify-center shadow-lg'>
          <h1 className='mt-5 font-serif text-2xl'>Chat History</h1>
        </div>
        <div className="w-[80vw] flex  justify-between h-[100vh] flex-col">
          <div className="  w-full overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`p-2 mb-2 rounded-lg`}>
                 {message.sender === 'user' ? (<Sender message={message.text} />) 
                 : (<Receiver message={message.text} />)}
                
              </div>
            ))}
          </div>
          <div className="flex items-center border-t border-gray-300 px-4 py-2 mb-5 pt-6">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              className="flex-1 px-2 py-1 border border-gray-300 rounded-lg mr-2 focus:outline-none"
              placeholder="Type your message..."
            />
            <button onClick={handleMessageSubmit} className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
              Send
            </button>
          </div>
        </div>
      </div>
    );
}
export default Home;