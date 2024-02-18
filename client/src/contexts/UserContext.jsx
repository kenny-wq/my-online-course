import { createContext, useState } from "react";
import AuthService from "../services/auth.service";

const UserContext = createContext();

export function UserContextProvider({ children }) {
    console.log(AuthService.getCurrentUser());
    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
    const value = { currentUser, setCurrentUser };
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
} 

export default UserContext;