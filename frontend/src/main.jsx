import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <GoogleOAuthProvider clientId="417758991881-ohsu170a8772blflcen229fl00egugh7.apps.googleusercontent.com">
      <App />
      </GoogleOAuthProvider>
    </Router>
  </React.StrictMode>
);
