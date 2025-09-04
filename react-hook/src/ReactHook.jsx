import { useState } from "react";

export default function ReactHook() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState();

    const changeName = () => {
        setName("Santosh");
    }

    const ageIncrement = () => {
        setAge(age + 1);
    }

    const toggleEmpStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <>
            <p>Name: {name}</p>
            <button onClick={changeName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={ageIncrement}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmpStatus}>Toggle Employe Status</button>
            
        </>
    );
}