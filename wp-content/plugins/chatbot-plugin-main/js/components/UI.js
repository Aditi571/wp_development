import React, { useState ,useEffect} from 'react';
import DemoChatbot from './DemoChatbot';


export const UI = () => {
    const [theme, setTheme] = useState('');
    const [aiName, setAiName] = useState('AI');
    const [startSentence, setStartSentence] = useState('How can I help you today?');
    const [userName, setUserName] = useState('');
    const [placeholder, setPlaceholder] = useState('Type your message');
    const [copyButton, setCopyButton] = useState(false);
    const [popup, setPopup] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    const handleAiNameChange = (e) => {
        setAiName(e.target.value);
    };

    const handleStartSentenceChange = (e) => {
        setStartSentence(e.target.value);
    };

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePlaceholderChange = (e) => {
        setPlaceholder(e.target.value);
    };

    const handleCopyButtonChange = (e) => {
        setCopyButton(e.target.checked);
    };

    const handlePopupChange = (e) => {
        setPopup(e.target.checked);
    };

    const handleFullScreenChange = (e) => {
        setFullScreen(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission (if needed)
        console.log("Selected theme:", theme);
        console.log("AI Name:", aiName);
        console.log("Start Sentence:", startSentence);
        console.log("User Name:", userName);
        console.log("Placeholder:", placeholder);
        console.log("Copy Button:", copyButton);
        console.log("Popup:", popup);
        console.log("Full Screen:", fullScreen);
    };



    //////////////////////////////////////////////////////
    useEffect(() => {
        setMessages([{ text: `${startSentence}`, sender: 'bot' }]);
    }, []);

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

            // Simulate AI response
            const aiResponse = 'This is a response from the AI.';
            setMessages([...messages, { text: aiResponse, sender: 'bot' }]);
        }
    };

    return (
        <div className='container'>
            <h2>AI Model Features Selection</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="theme-select">Select Theme:</label>
                    <select id="theme-select" name="themeSelect" value={theme} onChange={handleThemeChange}>
                        <option value="">Select a theme</option>
                        <option value="theme1">Theme 1</option>
                        <option value="theme2">Theme 2</option>
                        <option value="theme3">Theme 3</option>
                    </select>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="ai-name-input">AI Name:</label>
                        <input 
                            type="text" 
                            id="ai-name-input" 
                            name="aiNameInput" 
                            value={aiName} 
                            onChange={handleAiNameChange} 
                            placeholder="Enter AI name" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-name-input">User Name:</label>
                        <input 
                            type="text" 
                            id="user-name-input" 
                            name="userNameInput" 
                            value={userName} 
                            onChange={handleUserNameChange} 
                            placeholder="Enter user name" 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="start-sentence-input">Start Sentence:</label>
                    <input 
                        type="text" 
                        id="start-sentence-input" 
                        name="startSentenceInput" 
                        value={startSentence} 
                        onChange={handleStartSentenceChange} 
                        placeholder="Enter start sentence" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="placeholder-input">Placeholder:</label>
                    <input 
                        type="text" 
                        id="placeholder-input" 
                        name="placeholderInput" 
                        value={placeholder} 
                        onChange={handlePlaceholderChange} 
                        placeholder="Enter placeholder text" 
                    />
                </div>
                <div className="form-group form-row-check">
    <div className="checkbox-group">
        <input 
            type="checkbox" 
            id="copy-button-checkbox" 
            name="copyButtonCheckbox" 
            checked={copyButton} 
            onChange={handleCopyButtonChange} 
        />
        <label htmlFor="copy-button-checkbox">Copy Button</label>
    </div>
    <div className="checkbox-group">
        <input 
            type="checkbox" 
            id="popup-checkbox" 
            name="popupCheckbox" 
            checked={popup} 
            onChange={handlePopupChange} 
        />
        <label htmlFor="popup-checkbox">Popup</label>
    </div>
    <div className="checkbox-group">
        <input 
            type="checkbox" 
            id="full-screen-checkbox" 
            name="fullScreenCheckbox" 
            checked={fullScreen} 
            onChange={handleFullScreenChange} 
        />
        <label htmlFor="full-screen-checkbox">Full Screen</label>
    </div>
</div>

                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>






            <div className="chat-container">
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.sender === 'user' ? 'You: ' : 'AI: '}
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>

        </div>
    );
};
