import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router";

export default function GuestGuard() {
    const { user, isLoading } = useContext(AuthContext)
 
    if (isLoading) {
        return null
    }

    if (user) {
        return <Navigate to="/" />
    }

    return (
        <Outlet />
    )

}