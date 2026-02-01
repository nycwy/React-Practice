import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

function App() {
    const { user } = useContext(AuthContext);
    
    return (
        <>
            <div>{user.email}</div>
            <div>{user.username}</div>
        </>
    )
}

export default App;
