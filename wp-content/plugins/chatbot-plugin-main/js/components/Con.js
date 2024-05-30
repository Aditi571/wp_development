import React, { useState } from 'react';

export const Con = () => {
    // State for each input
    const [instructions, setInstructions] = useState('');
    const [maxTokens, setMaxTokens] = useState('');
    const [temperature, setTemperature] = useState('');
    const [contentAware, setContentAware] = useState(false);
    const [inputMaxLength, setInputMaxLength] = useState('');
    const [maxMessages, setMaxMessages] = useState('');
    const [contextMaxLength, setContextMaxLength] = useState('');
    const [selectedModel, setSelectedModel] = useState('option1'); // Default value

    // Event handlers for input changes
    const handleInstructionsChange = (e) => {
        setInstructions(e.target.value);
    };

    const handleMaxTokensChange = (e) => {
        setMaxTokens(e.target.value);
    };

    const handleTemperatureChange = (e) => {
        setTemperature(e.target.value);
    };

    const handleContentAwareChange = (e) => {
        setContentAware(e.target.checked);
    };

    const handleInputMaxLengthChange = (e) => {
        setInputMaxLength(e.target.value);
    };

    const handleMaxMessagesChange = (e) => {
        setMaxMessages(e.target.value);
    };

    const handleContextMaxLengthChange = (e) => {
        setContextMaxLength(e.target.value);
    };

    const handleSelectedModelChange = (e) => {
        setSelectedModel(e.target.value);
    };

    // Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission (if needed)
    };

    return (
        <div className="container">
            <h2>Chatbot Config</h2>
            <form className="config-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="text-input">Instructions</label>
                    <input 
                        type="text" 
                        id="text-input" 
                        name="textInput" 
                        value={instructions} 
                        onChange={handleInstructionsChange} 
                        placeholder='Be Friendly.' 
                    />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="number-input1">Max Tokens</label>
                        <input 
                            type="number" 
                            id="number-input1" 
                            name="numberInput1" 
                            value={maxTokens} 
                            onChange={handleMaxTokensChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number-input2">Temperature</label>
                        <input 
                            type="number" 
                            id="number-input2" 
                            name="numberInput2" 
                            value={temperature} 
                            onChange={handleTemperatureChange} 
                            min="0" 
                            max="1" 
                            step="0.01" 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="checkbox">Content Aware:</label>
                    <input 
                        type="checkbox" 
                        id="checkbox" 
                        name="checkbox" 
                        checked={contentAware} 
                        onChange={handleContentAwareChange} 
                    /> 
                    <span>Yes</span>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="number-input3">Input Max Length:</label>
                        <input 
                            type="number" 
                            id="number-input3" 
                            name="numberInput3" 
                            value={inputMaxLength} 
                            onChange={handleInputMaxLengthChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number-input4">Max Messages:</label>
                        <input 
                            type="number" 
                            id="number-input4" 
                            name="numberInput4" 
                            value={maxMessages} 
                            onChange={handleMaxMessagesChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number-input5">Context Max Length:</label>
                        <input 
                            type="number" 
                            id="number-input5" 
                            name="numberInput5" 
                            value={contextMaxLength} 
                            onChange={handleContextMaxLengthChange} 
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="select-option">Select Model:</label>
                        <select 
                            id="select-option" 
                            name="selectOption" 
                            value={selectedModel} 
                            onChange={handleSelectedModelChange}
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            <option value="option4">Option 4</option>
                            <option value="option5">Option 5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};
