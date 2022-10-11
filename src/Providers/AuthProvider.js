import { createContext, useState } from "react"

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userLogged, setUserLogged] = useState({
        isLogged: false,
        idUser: '',
        token: '',
        role: '',
    });

    return (
        <AuthContext.Provider value={[userLogged, setUserLogged]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider