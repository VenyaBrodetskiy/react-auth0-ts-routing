import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HeaderMainComponent } from '../../components/headerMain/headerMain.component'
import AboutPage from '../../pages/about/about.page'
import ContactUsPage from '../../pages/contactUs/contactUs.page'
import HomePage from '../../pages/home/home.page'
import LoginPage from '../../pages/login/login.page'
import ProfilePage from '../../pages/profile/profile.page'
import StudentsPage from '../../pages/students/students.page'
import ProtectedRoute from '../../routes/protected.route'

export default function MainLayout() {

    return (
        <div>
            <HeaderMainComponent />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/contactus" element={<ContactUsPage />}></Route>
                <Route path="/students" element={<StudentsPage />}></Route>
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>}>
                </Route>
                <Route path="*" element={<h1>404 - not found</h1>}></Route>
            </Routes>
        </div>
    )
}
