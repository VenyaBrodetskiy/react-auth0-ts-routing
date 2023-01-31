import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';

import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "../node_modules/primereact/resources/primereact.min.css";                  //core css
import "../node_modules/primeicons/primeicons.css";                                //icons

import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>

        <Auth0Provider
            domain="dev-jz8i8ymmqw7p0b8t.us.auth0.com"
            clientId="qtoM8WRPFC2FzDGGwZ2O1GOsWrf7FVYj"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <RecoilRoot>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </RecoilRoot>
        </Auth0Provider>
    </React.StrictMode>
);


