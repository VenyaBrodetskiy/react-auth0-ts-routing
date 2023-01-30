import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';

import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Auth0Provider
        domain="dev-jz8i8ymmqw7p0b8t.us.auth0.com"
        clientId="qtoM8WRPFC2FzDGGwZ2O1GOsWrf7FVYj"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Auth0Provider>
);


