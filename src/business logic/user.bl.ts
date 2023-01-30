import { User } from "@auth0/auth0-react";
import axios from "axios";

export const getRoles = async (user: User) => {

    let response = await axios.get("http://localhost:3030/api/roles", {
        params: {
            userId: user?.sub
        }
    })
    if (response.data) {
        return response.data
    }
    return [];
}

export const isAdmin = async (user: User): Promise<boolean> => {
    let roles = await getRoles(user);
    return roles.includes((r: any) => r.name === "admin");
}