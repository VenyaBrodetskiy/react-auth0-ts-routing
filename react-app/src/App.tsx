import React from 'react';

import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import DefaultLayout from './layouts/default/default.layout';
import MainLayout from './layouts/main/main.layout';

function App() {
    const { isAuthenticated, user, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isAuthenticated && user?.sub) {
        return <div className="App">
            <MainLayout></MainLayout>
        </div>
    } else {
        return <DefaultLayout></DefaultLayout>;
    }
}

export default App;
