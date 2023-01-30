import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react';
import { isAdmin } from '../services/user.service';

export interface useRoleResult {
    isAdmin?: boolean;
}

export default function useRole(): useRoleResult {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [state, setState] = useState<useRoleResult>({});

    useEffect(() => {
        handleRoles();
    }, [isAuthenticated]);

    const handleRoles = async () => {
        if (isAuthenticated && user) {
            let result = await isAdmin(user);
            setState((prev) => {
                return { ...prev, isAdmin: true }
            })
        }
    };

    return state;
}
