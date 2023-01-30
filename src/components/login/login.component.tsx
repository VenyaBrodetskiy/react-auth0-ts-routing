import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginComponent() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return (
            <div className="d-flex justify-content-center my-3">
                <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log In</button>
            </div>
        )
    } else {
        return (
            <div>
                You are already logged in
            </div>
        )
    }
}
