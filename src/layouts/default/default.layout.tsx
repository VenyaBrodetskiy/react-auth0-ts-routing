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
        // <div className="defaultLayout-container">
        //     <div className="container-fluid bg-warning">
        //         <nav className="navbar navbar-light">
        //             <div className="navbar-brand">Navbar</div>
        //             <ul className="nav">
        //                 <li className="nav-item">
        //                     <Link to={"/"} className="nav-link active">Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to={"/profile"} className="nav-link active">Profile</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log In</button>
        //                 </li>
        //             </ul>
        //         </nav>
        //     </div>

        //     <div className="container-fluid bg-light">
        //         Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
        //     </div>

        //     <footer className="footer-container">
        //         Lorem ipsum
        //     </footer>
        // </div>
    )
}
