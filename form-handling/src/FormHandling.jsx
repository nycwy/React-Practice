import React, { useState } from 'react'

const FormHandling = () => {
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => (
            { ...prevData, [name]: value }
        ));
    };

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <input name='username' type="text" placeholder='Username' onChange={onChangeHandler} value={formData.username} />
                </div>
                <div>
                    <input name='email' type="email" placeholder='Email' onChange={onChangeHandler} value={formData.email} />
                </div>
                <div>
                    <input name='password' type="password" placeholder='Password' onChange={onChangeHandler} value={formData.password} />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default FormHandling