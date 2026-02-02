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
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg border border-gray-100'>
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
            </div>
        </div>
    )
}

export default Register;