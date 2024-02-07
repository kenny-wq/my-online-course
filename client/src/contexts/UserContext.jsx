import { createContext, useState } from "react";

const UserContext = createContext();

export function UserContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
} 

export default UserContext;