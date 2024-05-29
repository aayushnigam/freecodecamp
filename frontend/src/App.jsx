import React from 'react'; // Import React
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from React Router
import Home from './components/Home'; // Import Home component
import SignIn from './components/SignIn'; // Import SignIn component
import Dashboard from './components/Dashboard'; // Import Dashboard component
import './index.css'; // Import Tailwind CSS

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
    );
}

export default App; // Export App component
