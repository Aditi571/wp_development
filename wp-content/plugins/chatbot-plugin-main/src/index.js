import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import './index.css';

import React, { useState } from 'react';

registerBlockType('namespace/block-name', {
  title: __('Chat Block', 'chatbot'),
  icon: 'admin-comments',
  category: 'widgets',

  attributes: {
    messages: {
      type: 'array',
      default: [],
    },
    inputText: {
      type: 'string',
      default: '',
    },
  },

  // Define the edit function to render the block in the editor
  edit: ({ attributes, setAttributes }) => {
    const [inputText, setInputText] = useState(attributes.inputText);

    const handleMessageChange = (newValue) => {
      setInputText(newValue);
      setAttributes({ inputText: newValue });
    };

    const handleSendMessage = () => {
      if (inputText.trim() === '') return;

      const newMessages = [...attributes.messages, { text: inputText, sender: 'user' }];
      setAttributes({ messages: newMessages, inputText: '' });
    };

    return (
      <div className='flex flex-col w-[80vw] h-[100vh]'>
        <div className='w-[1000px] h-[100vh] bg-black mr-5'>
          <h1 className='text'>Chat</h1>
        </div>
        <div className=''>
          <div className="flex flex-row chat-container bg-black w-[80vw]">
            {attributes.messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-container bg-black">
            <TextControl
              value={inputText}
              onChange={handleMessageChange}
              placeholder={__('Type your message...', 'chatbot')}
            />
            <button className='text-3xl text-white bg-black' onClick={handleSendMessage}>
              {__('Send', 'chatbot')}
            </button>
          </div>
        </div>
      </div>
    );
  },

  // Define the save function to render the block on the frontend
  save: ({ attributes }) => {
    const [inputText, setInputText] = useState(attributes.inputText);

    return (
      <div>
        <div className="bg-black chat-container">
          {attributes.messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <button className='text-5xl bg-black'>hey</button>
      </div>
    );
  },
});
