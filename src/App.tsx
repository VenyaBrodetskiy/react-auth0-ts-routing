import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HeaderMainComponent } from './components/headerMain/headerMain.component';

import HomePage from './pages/home/home.page';
import LoginPage from './pages/login/login.page';
import ProfilePage from './pages/profile/profile.page';

import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { getRoles } from '@testing-library/react';
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
