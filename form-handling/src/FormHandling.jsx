import React, { useState } from 'react'

const FormHandling = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <form>
                <div>
                    <input type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)} value={username} />
                </div>
                <div>
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default FormHandling