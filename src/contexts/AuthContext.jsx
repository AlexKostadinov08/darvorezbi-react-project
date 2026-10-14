import { createContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        supabase.auth.getSession()
            .then(result => setUser(result.data.session?.user))
        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user)
        })

        return () => data.subscription.unsubscribe()
    }, [])

    async function logout() {
        await supabase.auth.signOut()
    }

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    );
}