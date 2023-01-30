import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function ProfilePage() {
    const { user, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return (
            <div className="d-flex flex-column align-items-center">
                <div className="card col-6 my-3">
                    <div className="card-header">{user?.name}</div>
                    <img src={user?.picture} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{user?.family_name}</h4>
                        <p className="card-text">{user?.email}</p>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                You are not logged in. Please go to <Link to={"/login"} className="text-primary">log in page</Link>
            </div>
        )
    }
}
