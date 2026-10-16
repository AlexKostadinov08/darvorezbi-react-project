import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router";

export default function PrivateGuard() {
    const { user, isLoading } = useContext(AuthContext)
 
    if (isLoading) {
        return null
    }

    if (!user) {
        return <Navigate to="/login" />
    }

    return (
        <Outlet />
    )

}