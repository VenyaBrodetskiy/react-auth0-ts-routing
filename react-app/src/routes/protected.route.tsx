import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Navigate } from 'react-router-dom';

export interface ProtectedRouteProps {
    className?: string;
    children: JSX.Element;
}

export default function ProtectedRoute({ className, children }: ProtectedRouteProps) {
    const { isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        return children;
    } else {
        return (
            <Navigate to="/login" />
        )
    }
}
