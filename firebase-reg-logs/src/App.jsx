import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { signOut } from "firebase/auth";
import { auth } from './firebase';

function App() {
    const { user } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    
    return (
        <>
            <div>{user?.email}</div>
            <div>{user?.username}</div>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default App;
