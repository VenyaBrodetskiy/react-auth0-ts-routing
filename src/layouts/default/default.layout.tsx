import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HeaderDefaultComponent from '../../components/headerDefault/headerDefault.component';
import AboutPage from '../../pages/about/about.page';
import ContactUsPage from '../../pages/contactUs/contactUs.page';
import HomePage from '../../pages/home/home.page';
import LoginPage from '../../pages/login/login.page';
import "./style.scss";

export default function DefaultLayout() {
    return (
        <div>
            <HeaderDefaultComponent />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/contactus" element={<ContactUsPage />}></Route>
                <Route path="*" element={<h1>404 - not found</h1>}></Route>
            </Routes>
        </div>
    )
}
