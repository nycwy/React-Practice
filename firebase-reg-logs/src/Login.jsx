import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <div>
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
            />

            <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;