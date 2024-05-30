
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UI } from './components/UI';
import { Con } from './components/Con';
import { Set } from './components/Set';
import { Lic } from './components/Lic';

const Dashboard = () => (
    <div className="wrap">
        <h1>Chatbot Plugin Dashboard</h1>
        <nav className='flex bg-black'>
            <ul className='flex flex-row'>
                <li><Link to="/">Chatbot UI</Link></li>
                <li><Link to="/widget1">Chatbot Config</Link></li>
                <li><Link to="/widget2">Settings</Link></li>
                <li><Link to="/widget3">License</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<UI />} />
            <Route path="/widget1" element={<Con/>} />
            <Route path="/widget2" element={<Set />} />
            <Route path="/widget3" element={<Lic/>} />
            
        </Routes>
    </div>
);



document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('react-dashboard');
    if (rootElement) {
        const root = createRoot(rootElement);
        root.render(
            <Router>
                <Dashboard />
            </Router>
        );
    }
});
