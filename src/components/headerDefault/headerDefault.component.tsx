import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderDefaultComponent() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="container-fluid bg-warning">
            <nav className="navbar navbar-light">
                <div className="navbar-brand">Navbar</div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link active">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/contactus"} className="nav-link active">Contact us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/about"} className="nav-link active">About</Link>
                    </li>
                    <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log In</button>
                </ul>
            </nav>
        </div>)
}
