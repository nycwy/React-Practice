import { useContext } from "react"
import { UserContext } from "./ComponentA"

export default function ComponentD() {
    const user = useContext(UserContext);
    return (
        <div className="box">
            <h2>ComponentD</h2>
            <p>{`Hello ${user}`}</p>
        </div>
    )
}