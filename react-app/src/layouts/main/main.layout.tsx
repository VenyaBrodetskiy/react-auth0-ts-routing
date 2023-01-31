import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HeaderMainComponent } from '../../components/headerMain/headerMain.component'
import AboutPage from '../../pages/about/about.page'
import ContactUsPage from '../../pages/contactUs/contactUs.page'
import HomePage from '../../pages/home/home.page'
import LoginPage from '../../pages/login/login.page'
import ProfilePage from '../../pages/profile/profile.page'
import RecoilExPage from '../../pages/recoilExample/recoilExample.page'
import StudentPage from '../../pages/student/student.page'
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
                <Route
                    path="/students"
                    element={
                        <ProtectedRoute>
                            <StudentsPage />
                        </ProtectedRoute>}>
                </Route>
                <Route
                    path="/student"
                    element={
                        <ProtectedRoute>
                            <StudentPage />
                        </ProtectedRoute>}>
                </Route>
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>}>
                </Route>
                <Route
                    path="/recoil"
                    element={
                        <ProtectedRoute>
                            <RecoilExPage />
                        </ProtectedRoute>}>
                </Route>
                <Route path="*" element={<h1>404 - not found</h1>}></Route>
            </Routes>
        </div>
    )
}
