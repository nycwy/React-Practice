import { useState, createContext } from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext();

export default function ComponentA() {
    const [user, setUser] = useState("Santosh");

    return (
        <div className="box">
            <h2>ComponentA</h2>
            <p>{`Hello ${user}`}</p>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>
    )
}