import React, { useState } from 'react'
import Input from '../components/Input';
import Already from '../components/Already';
import Button from '../components/Button';
import Heading from '../components/Heading';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        
    }

    return (
        <>
            <Heading headingText='Register Now' text='Just a demo registration' />
            <Input
                type='email'
                value={email}
                placeholder='Email'
                setValue={setEmail}
            />
            <Input
                type='text'
                value={username}
                placeholder='Username'
                setValue={setUsername}
            />
            <Input
                type='password'
                value={password}
                placeholder='Password'
                setValue={setPassword}
            />
            <Already text='Already have an account?' linkText='Login' link='/login' />
            <Button text="Register" onClick={handleRegister} />
        </>
    )
}

export default Register;