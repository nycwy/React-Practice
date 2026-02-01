import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const userDoc = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(userDoc.user.uid);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return (
        <div>
            <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            />
            <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            />
            <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;