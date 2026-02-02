import React, { useState } from 'react'
import Heading from '../components/Heading';
import Input from '../components/Input';
import Already from '../components/Already';
import Button from '../components/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg border border-gray-100'>
                <Heading headingText="Login" text="Please login with you credentials" />
                <Input
                    type='email'
                    value={email}
                    placeholder='Email'
                    setValue={setEmail}
                />
                <Input
                    type='password'
                    value={password}
                    placeholder='Password'
                    setValue={setPassword}
                />
                <Already text='New Here?' linkText='Please Register' link='/register' />
                <Button text="Login" onClick={handleLogin} />
            </div>
        </div>
    )
}

export default Login;